import { InputType, Field, Int } from '@nestjs/graphql';
import { ProductVariationInput } from './product-variation.input';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field(() => Int)
  categoryId: number;

  @Field(() => [ProductVariationInput], { nullable: true })
  variations?: ProductVariationInput[];
}
