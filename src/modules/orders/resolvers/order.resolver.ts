import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../../auth/gql-auth.guard';
import { OrderService } from '../services/order.service';
import { CreateOrderInput } from '../dtos/create-order.input';
import { Order } from '../models/order.model';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order])
  @UseGuards(GqlAuthGuard)
  async getAllOrders() {
    return this.orderService.findAll();
  }

  @Mutation(() => Order)
  @UseGuards(GqlAuthGuard)
  async createOrder(@Args('data') data: CreateOrderInput) {
    return this.orderService.create(data);
  }
}
