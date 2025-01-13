import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UsersResolver } from './resolvers/user.resolver';

@Module({
  providers: [UserService, UsersResolver],
})
export class UsersModule {}
