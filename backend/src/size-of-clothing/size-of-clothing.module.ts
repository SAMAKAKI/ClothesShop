import { Module } from '@nestjs/common';
import { SizeOfClothingService } from './size-of-clothing.service';
import { SizeOfClothingController } from './size-of-clothing.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SizeOfClothingController],
  providers: [SizeOfClothingService],
})
export class SizeOfClothingModule {}
