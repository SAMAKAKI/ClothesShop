import { PartialType } from '@nestjs/mapped-types';
import { CreateSizeOfClothingDto } from './create-size-of-clothing.dto';

export class UpdateSizeOfClothingDto extends PartialType(CreateSizeOfClothingDto) {}
