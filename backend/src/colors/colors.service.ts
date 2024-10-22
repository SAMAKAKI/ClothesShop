import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColorsService {
  constructor(private prismaService: PrismaService) {}
  create() {
    return 'This action adds a new color';
  }

  findAll() {
    return this.prismaService.color.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} color`;
  }

  update() {
    return `This action updates a # color`;
  }

  remove(id: number) {
    return `This action removes a #${id} color`;
  }
}
