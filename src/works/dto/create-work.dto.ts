import { IsNumber, IsObject, IsOptional, IsString, MinLength } from 'class-validator';
import { Section } from 'src/sections/entities/section.entity';

export class CreateWorkDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsNumber()
  // @IsDecimal({ decimal_digits: '2' })
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
