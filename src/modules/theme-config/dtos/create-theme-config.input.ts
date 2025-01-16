import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateThemeConfigInput {
  @Field()
  themeName: string;

  @Field()
  primaryColor: string;

  @Field()
  backgroundColor: string;

  @Field()
  secondaryColor: string;

  @Field()
  accentColor: string;

  @Field()
  textColor: string;

  @Field()
  borderColor: string;

  @Field()
  shadow: string;

  @Field()
  titleFont: string;

  @Field()
  bodyFont: string;

  @Field()
  descFont: string;

  @Field()
  spacingUnit: string;

  @Field()
  borderRadius: string;

  @Field()
  width: string;

  @Field()
  height: string;

  @Field()
  customSpacing: string;

  @Field()
  customClass: string;
}
