import { InputType, Field, Float, Int } from '@nestjs/graphql';
import { ProductVariationInput } from './product-variation.input';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  categoryId: number;

  @Field(() => [ProductVariationInput], { nullable: true })
  variations?: ProductVariationInput[];
}
