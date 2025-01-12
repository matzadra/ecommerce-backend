import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateCategoryInput } from '../dtos/create-category.input';
import { UpdateCategoryInput } from '../dtos/update-category.input';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany({
      include: { products: true },
    });
  }

  async create(data: CreateCategoryInput) {
    return this.prisma.category.create({ data });
  }

  async update(data: UpdateCategoryInput) {
    return this.prisma.category.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: number) {
    await this.prisma.category.delete({ where: { id } });
    return true;
  }
}
