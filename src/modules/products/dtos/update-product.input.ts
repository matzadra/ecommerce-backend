import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';
import { ProductVariationInput } from './product-variation.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;

  @Field(() => [ProductVariationInput], { nullable: true })
  variations?: ProductVariationInput[];

  @Field(() => [String], { nullable: true })
  images?: string[];
}
