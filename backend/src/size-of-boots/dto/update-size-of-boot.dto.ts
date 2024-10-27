import { PartialType } from '@nestjs/mapped-types';
import { CreateSizeOfBootDto } from './create-size-of-boot.dto';

export class UpdateSizeOfBootDto extends PartialType(CreateSizeOfBootDto) {}
