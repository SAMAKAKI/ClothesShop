import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  image: string;
}
