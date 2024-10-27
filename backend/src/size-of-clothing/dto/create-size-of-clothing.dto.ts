import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSizeOfClothingDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
