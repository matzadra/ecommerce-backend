import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { OrderResolver } from './resolvers/order.resolver';

@Module({
  providers: [OrderService, OrderResolver],
})
export class OrdersModule {}
