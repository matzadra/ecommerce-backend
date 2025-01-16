import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateThemeConfigInput } from '../dtos/create-theme-config.input';
import { UpdateThemeConfigInput } from '../dtos/update-theme-config.input';

@Injectable()
export class ThemeConfigService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.themeConfig.findMany();
  }

  async findById(id: number) {
    return this.prisma.themeConfig.findUnique({ where: { id } });
  }

  async create(data: CreateThemeConfigInput) {
    return this.prisma.themeConfig.create({ data });
  }

  async update(data: UpdateThemeConfigInput) {
    return this.prisma.themeConfig.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: number) {
    await this.prisma.themeConfig.delete({ where: { id } });
    return true;
  }
}
