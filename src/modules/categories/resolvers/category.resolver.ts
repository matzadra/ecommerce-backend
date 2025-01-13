import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { CreateCategoryInput } from '../dtos/create-category.input';
import { UpdateCategoryInput } from '../dtos/update-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async getAllCategories() {
    return this.categoryService.findAll();
  }

  @Mutation(() => Category)
  async createCategory(@Args('data') createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Mutation(() => Category)
  async updateCategory(@Args('data') updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.update(updateCategoryInput);
  }

  @Mutation(() => Boolean)
  async deleteCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.delete(id);
  }
}
