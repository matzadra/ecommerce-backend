import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  userId: number;

  @Field(() => [Int], { nullable: true })
  productIds?: number[];

  @Field(() => [Int], { nullable: true })
  variationIds?: number[];
}
