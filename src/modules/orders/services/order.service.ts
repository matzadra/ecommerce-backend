import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateOrderInput } from '../dtos/create-order.input';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.order.findMany({
      include: { products: true },
    });
  }

  async create(data: CreateOrderInput) {
    const { productIds, variationIds, userId } = data;

    // Calcula o total do pedido com base nas variações e produtos
    let total = 0;

    if (variationIds && variationIds.length > 0) {
      const variations = await this.prisma.productVariation.findMany({
        where: { id: { in: variationIds } },
      });

      total += variations.reduce((sum, variation) => sum + variation.price, 0);

      // Atualiza o estoque das variações
      for (const variationId of variationIds) {
        await this.prisma.productVariation.update({
          where: { id: variationId },
          data: { stock: { decrement: 1 } },
        });
      }
    }

    if (productIds && productIds.length > 0) {
      const products = await this.prisma.product.findMany({
        where: { id: { in: productIds } },
      });

      total += products.reduce((sum, product) => sum + product.price, 0);

      for (const productId of productIds) {
        await this.prisma.product.update({
          where: { id: productId },
          data: { stock: { decrement: 1 } },
        });
      }
    }

    return this.prisma.order.create({
      data: {
        userId,
        total,
        products: {
          connect: productIds?.map((id) => ({ id })) || [],
        },
      },
      include: { products: true },
    });
  }
}
