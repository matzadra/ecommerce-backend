import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategoryResolver } from './resolvers/category.resolver';

@Module({
  providers: [CategoryService, CategoryResolver]
})
export class CategoriesModule {}
