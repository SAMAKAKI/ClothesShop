/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeOfClothingService } from './size-of-clothing.service';
import { CreateSizeOfClothingDto } from './dto/create-size-of-clothing.dto';
import { UpdateSizeOfClothingDto } from './dto/update-size-of-clothing.dto';

@Controller('size-of-clothing')
export class SizeOfClothingController {
  constructor(private readonly sizeOfClothingService: SizeOfClothingService) {}

  @Post()
  create(@Body() createSizeOfClothingDto: CreateSizeOfClothingDto) {
    return this.sizeOfClothingService.create(createSizeOfClothingDto);
  }

  @Get()
  findAll() {
    return this.sizeOfClothingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizeOfClothingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSizeOfClothingDto: UpdateSizeOfClothingDto) {
    return this.sizeOfClothingService.update(id, updateSizeOfClothingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sizeOfClothingService.remove(id);
  }
}
