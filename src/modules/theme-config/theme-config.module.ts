import { Module } from '@nestjs/common';
import { ThemeConfigService } from './services/theme-config.service';
import { ThemeConfigResolver } from './resolvers/theme-config.resolver';

@Module({
  providers: [ThemeConfigService, ThemeConfigResolver],
})
export class ThemeConfigModule {}
