import { IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @MinLength(1)
  name: string;
  @IsIn(['car', 'a-terrain', 'housing-vehicle', 'motorbike'])
  vehicle: string;
}
