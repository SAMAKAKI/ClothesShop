import { Module } from '@nestjs/common';
import { SizeOfBootsService } from './size-of-boots.service';
import { SizeOfBootsController } from './size-of-boots.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SizeOfBootsController],
  providers: [SizeOfBootsService],
})
export class SizeOfBootsModule {}
