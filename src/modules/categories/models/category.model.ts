import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '../../products/models/product.model';

@ObjectType()
export class Category {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Product], { nullable: true })
  products?: Product[];
}
