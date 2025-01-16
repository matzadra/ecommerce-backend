import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateThemeConfigInput } from './create-theme-config.input';

@InputType()
export class UpdateThemeConfigInput extends PartialType(
  CreateThemeConfigInput,
) {
  @Field(() => Int)
  id: number;
}
