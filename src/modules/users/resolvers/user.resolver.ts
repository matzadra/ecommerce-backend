import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query(() => String)
  getUser(): string {
    return 'This is a test user!';
  }
}
