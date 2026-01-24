import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;
  @IsString()
  price?: number;
}
