import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { OrderProduct } from './order-product.model';

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => [OrderProduct])
  products: OrderProduct[];

  @Field(() => Float)
  total: number;

  @Field()
  createdAt: Date;
}
