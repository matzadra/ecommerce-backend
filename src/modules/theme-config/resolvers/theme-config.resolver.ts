import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ThemeConfigService } from '../services/theme-config.service';
import { ThemeConfig } from '../models/theme-config.model';
import { CreateThemeConfigInput } from '../dtos/create-theme-config.input';
import { UpdateThemeConfigInput } from '../dtos/update-theme-config.input';

@Resolver(() => ThemeConfig)
export class ThemeConfigResolver {
  constructor(private readonly themeConfigService: ThemeConfigService) {}

  @Query(() => [ThemeConfig])
  async getAllThemes() {
    return this.themeConfigService.findAll();
  }

  @Query(() => ThemeConfig, { nullable: true })
  async getThemeById(@Args('id', { type: () => Int }) id: number) {
    return this.themeConfigService.findById(id);
  }

  @Mutation(() => ThemeConfig)
  async createTheme(
    @Args('data') createThemeConfigInput: CreateThemeConfigInput,
  ) {
    return this.themeConfigService.create(createThemeConfigInput);
  }

  @Mutation(() => ThemeConfig)
  async updateTheme(
    @Args('data') updateThemeConfigInput: UpdateThemeConfigInput,
  ) {
    return this.themeConfigService.update(updateThemeConfigInput);
  }

  @Mutation(() => Boolean)
  async deleteTheme(@Args('id', { type: () => Int }) id: number) {
    return this.themeConfigService.delete(id);
  }
}
