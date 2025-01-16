import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateOrderInput } from '../dtos/create-order.input';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.order.findMany({
      include: {
        products: {
          include: {
            productVariation: true,
          },
        },
      },
    });
  }

  async create(data: CreateOrderInput) {
    const { variationIds, userId } = data;

    const variations = await this.prisma.productVariation.findMany({
      where: { id: { in: variationIds } },
    });

    const total = variations.reduce(
      (sum, variation) => sum + variation.price,
      0,
    );

    return this.prisma.order.create({
      data: {
        userId,
        total,
        products: {
          create: variationIds.map((id) => ({
            productVariationId: id,
            price: variations.find((v) => v.id === id).price,
            quantity: 1,
          })),
        },
      },
      include: {
        products: {
          include: {
            productVariation: true,
          },
        },
      },
    });
  }
}
