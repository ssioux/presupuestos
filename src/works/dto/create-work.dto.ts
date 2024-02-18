import { Type } from 'class-transformer';
import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Section } from 'src/sections/entities/section.entity';

export class CreateWorkDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsNumber()
  price1: number;
  @IsNumber()
  @IsOptional()
  price2?: number;
  @IsNumber()
  @IsOptional()
  price3?: number;
  @IsNumber()
  @IsOptional()
  price4?: number;
  @IsNumber()
  @IsOptional()
  priceGapMod?: number;
  @IsObject()
  section: Section;
  @IsOptional()
  deleteAt: Date;
}
