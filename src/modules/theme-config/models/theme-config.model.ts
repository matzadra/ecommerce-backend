import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ThemeConfig {
  @Field(() => Int)
  id: number;

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
