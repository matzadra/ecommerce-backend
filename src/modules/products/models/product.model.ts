import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { ProductVariation } from './product-variation.model';
@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  categoryId: number;

  @Field(() => [ProductVariation], { nullable: true })
  variations?: ProductVariation[];
}
