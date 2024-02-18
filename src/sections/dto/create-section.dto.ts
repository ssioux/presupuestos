import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateSectionDto {
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  vehicle: string;
}
