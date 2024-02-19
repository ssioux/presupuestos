import { IsArray, IsIn, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { Client } from 'src/clients/entities/client.entity';
import { Work } from 'src/works/entities/work.entity';

export class CreateBudgetDto {
  @IsString()
  @IsOptional()
  description?: string;
  @IsNumber()
  @IsOptional()
  bulletinE12V?: number;
  @IsNumber()
  @IsOptional()
  bulletinE230V?: number;
  @IsNumber()
  @IsOptional()
  bulletinG?: number;
  @IsNumber()
  @IsOptional()
  certificate?: number;
  @IsObject()
  client: Client;
  @IsNumber()
  user: number;
  @IsIn(['car', 'a-terrain', 'housing-vehicle', 'motorbike'])
  vehicle: string;
  @IsArray()
  works: Work[];
}
