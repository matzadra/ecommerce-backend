import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class ProductVariationInput {
  @Field(() => Int, { nullable: true })
  id?: number; //

  @Field()
  color: string;

  @Field()
  size: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
