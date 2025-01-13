import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CreateProductInput } from '../dtos/create-product.input';
import { UpdateProductInput } from '../dtos/update-product.input';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async getAllProducts() {
    return this.productService.findAll();
  }

  @Mutation(() => Product)
  async createProduct(@Args('data') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }

  @Mutation(() => Product)
  async updateProduct(@Args('data') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput);
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.delete(id);
  }
}
