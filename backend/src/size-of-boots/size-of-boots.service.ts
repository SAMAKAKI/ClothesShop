import { Injectable } from '@nestjs/common';
import { CreateSizeOfBootDto } from './dto/create-size-of-boot.dto';
import { UpdateSizeOfBootDto } from './dto/update-size-of-boot.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SizeOfBootsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createSizeOfBootDto: CreateSizeOfBootDto) {
    return this.prismaService.sizeOfBoots.create({
      data: createSizeOfBootDto,
    });
  }

  findAll() {
    return this.prismaService.sizeOfBoots.findMany();
  }

  findOne(id: string) {
    return this.prismaService.sizeOfBoots.findUnique({
      where: { id },
    });
  }

  update(id: string, updateSizeOfBootDto: UpdateSizeOfBootDto) {
    return this.prismaService.sizeOfBoots.update({
      where: { id },
      data: updateSizeOfBootDto,
    });
  }

  remove(id: string) {
    return this.prismaService.sizeOfBoots.delete({
      where: { id },
    });
  }
}
