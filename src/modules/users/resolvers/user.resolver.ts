import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { RegisterUserInput } from '../dtos/register-user.input';
import { LoginUserInput } from '../dtos/login-user.input';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String)
  async register(@Args('data') data: RegisterUserInput) {
    await this.userService.register(data);
    return 'User registered successfully';
  }

  @Mutation(() => String)
  async login(@Args('data') data: LoginUserInput) {
    const { token } = await this.userService.login(data.email, data.password);
    return token;
  }
}
