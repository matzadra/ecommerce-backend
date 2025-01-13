import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateProductInput } from '../dtos/create-product.input';
import { UpdateProductInput } from '../dtos/update-product.input';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany({
      include: { variations: true },
    });
  }

  async create(data: CreateProductInput) {
    return this.prisma.product.create({
      data: {
        ...data,
        variations: {
          create: data.variations.map((variation) => ({
            color: variation.color,
            size: variation.size,
            price: variation.price,
            stock: variation.stock,
          })),
        },
      },
      include: { variations: true },
    });
  }

  async update(data: UpdateProductInput) {
    const { variations, ...productData } = data;

    await this.prisma.product.update({
      where: { id: data.id },
      data: productData,
    });

    if (variations) {
      for (const variation of variations) {
        if (variation.id) {
          await this.prisma.productVariation.update({
            where: { id: variation.id },
            data: {
              color: variation.color,
              size: variation.size,
              price: variation.price,
              stock: variation.stock,
            },
          });
        } else {
          await this.prisma.productVariation.create({
            data: {
              ...variation,
              productId: data.id,
            },
          });
        }
      }
    }

    return this.prisma.product.findUnique({
      where: { id: data.id },
      include: { variations: true },
    });
  }

  async delete(id: number) {
    await this.prisma.product.delete({ where: { id } });
    return true;
  }
}
