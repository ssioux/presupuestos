import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  @IsOptional()
  description?: string;

  @IsIn(['all-terrain', 'car', 'motorbike', 'tow-vehicle'])
  vehicle: string;
}
