import { IsEmail, IsIn, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  lastName: string;

  //   @IsString()
  //   name: string;
  @IsPhoneNumber()
  @IsOptional()
  phone?: number;
  @IsIn(['particular', 'empresa'])
  type: string;
}
