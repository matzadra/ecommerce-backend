import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateProductInput } from '../dtos/create-product.input';
import { UpdateProductInput } from '../dtos/update-product.input';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async create(data: CreateProductInput) {
    return this.prisma.product.create({ data });
  }

  async update(data: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: number) {
    await this.prisma.product.delete({ where: { id } });
    return true;
  }
}
