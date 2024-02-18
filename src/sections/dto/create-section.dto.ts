import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @MinLength(1)
  name: string;
  @IsIn(['all-terrain', 'car', 'motorbike', 'tow-vehicle'])
  vehicle: string;
}
