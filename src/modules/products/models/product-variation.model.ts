import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class ProductVariation {
  @Field(() => Int)
  id: number;

  @Field()
  color: string;

  @Field()
  size: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  productId: number;
}
