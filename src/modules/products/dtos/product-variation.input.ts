import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class ProductVariationInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  color?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  stock?: number;

  @Field(() => [String], { nullable: true })
  images?: string[];
}
