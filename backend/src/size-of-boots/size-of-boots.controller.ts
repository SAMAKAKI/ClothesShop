/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeOfBootsService } from './size-of-boots.service';
import { CreateSizeOfBootDto } from './dto/create-size-of-boot.dto';
import { UpdateSizeOfBootDto } from './dto/update-size-of-boot.dto';

@Controller('size-of-boots')
export class SizeOfBootsController {
  constructor(private readonly sizeOfBootsService: SizeOfBootsService) {}

  @Post()
  create(@Body() createSizeOfBootDto: CreateSizeOfBootDto) {
    return this.sizeOfBootsService.create(createSizeOfBootDto);
  }

  @Get()
  findAll() {
    return this.sizeOfBootsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sizeOfBootsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSizeOfBootDto: UpdateSizeOfBootDto) {
    return this.sizeOfBootsService.update(id, updateSizeOfBootDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sizeOfBootsService.remove(id);
  }
}
