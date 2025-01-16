import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductVariation } from './product-variation.model';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  categoryId: number;

  @Field(() => [ProductVariation], { nullable: true })
  variations?: ProductVariation[];

  @Field(() => [String], { nullable: true })
  images?: string[];
}
