import { Module } from '@nestjs/common';
import { ColorsModule } from './colors/colors.module';

@Module({
  imports: [ColorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
