import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Product } from '../../products/models/product.model';

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => [Product])
  products: Product[];

  @Field(() => Float)
  total: number;

  @Field()
  createdAt: Date;
}
