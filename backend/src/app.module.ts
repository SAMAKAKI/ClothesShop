import { Module } from '@nestjs/common';
import { BrandsModule } from './brands/brands.module';
import { SizeOfClothingModule } from './size-of-clothing/size-of-clothing.module';
import { SizeOfBootsModule } from './size-of-boots/size-of-boots.module';
import { ColorsModule } from './colors/colors.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { OrdersModule } from './orders/orders.module';
import { AddressesModule } from './addresses/addresses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    BrandsModule,
    SizeOfClothingModule,
    SizeOfBootsModule,
    ColorsModule,
    ProductsModule,
    ReviewsModule,
    UsersModule,
    AddressesModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
