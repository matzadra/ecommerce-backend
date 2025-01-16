import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { ProductVariation } from '../../products/models/product-variation.model';

@ObjectType()
export class OrderProduct {
  @Field(() => Int)
  id: number;

  @Field(() => ProductVariation)
  productVariation: ProductVariation;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: number;
}
