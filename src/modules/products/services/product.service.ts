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

  async findById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { variations: true },
    });
  }

  async create(data: CreateProductInput) {
    return this.prisma.product.create({
      data: {
        name: data.name,
        categoryId: data.categoryId,
        variations: {
          create: data.variations?.map((variation) => ({
            color: variation.color,
            price: variation.price,
            stock: variation.stock,
            images: variation.images ?? [],
          })),
        },
      },
      include: { variations: true },
    });
  }

  async update(data: UpdateProductInput) {
    const { variations, ...productData } = data;

    const updatedProduct = await this.prisma.product.update({
      where: { id: data.id },
      data: productData,
      include: { variations: true },
    });

    if (variations) {
      for (const variation of variations) {
        if (variation.id) {
          await this.prisma.productVariation.update({
            where: { id: variation.id },
            data: {
              ...(variation.color && { color: variation.color }),
              ...(variation.price && { price: variation.price }),
              ...(variation.stock && { stock: variation.stock }),
              ...(variation.images && { images: variation.images }),
            },
          });
        } else {
          await this.prisma.productVariation.create({
            data: {
              color: variation.color ?? 'Default Color',
              price: variation.price ?? 0,
              stock: variation.stock ?? 0,
              images: variation.images ?? [],
              productId: data.id,
            },
          });
        }
      }
    }

    return updatedProduct;
  }

  async delete(id: number) {
    await this.prisma.product.delete({ where: { id } });
    return true;
  }
}
