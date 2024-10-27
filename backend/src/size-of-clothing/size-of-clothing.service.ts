import { Injectable } from '@nestjs/common';
import { CreateSizeOfClothingDto } from './dto/create-size-of-clothing.dto';
import { UpdateSizeOfClothingDto } from './dto/update-size-of-clothing.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SizeOfClothingService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createSizeOfClothingDto: CreateSizeOfClothingDto) {
    return this.prismaService.sizeOfClothing.create({
      data: createSizeOfClothingDto,
    });
  }

  findAll() {
    return this.prismaService.sizeOfClothing.findMany();
  }

  findOne(id: string) {
    return this.prismaService.sizeOfClothing.findUnique({
      where: { id },
    });
  }

  update(id: string, updateSizeOfClothingDto: UpdateSizeOfClothingDto) {
    return this.prismaService.sizeOfClothing.update({
      where: { id },
      data: updateSizeOfClothingDto,
    });
  }

  remove(id: string) {
    return this.prismaService.sizeOfClothing.delete({
      where: { id },
    });
  }
}
