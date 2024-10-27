import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSizeOfBootDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
