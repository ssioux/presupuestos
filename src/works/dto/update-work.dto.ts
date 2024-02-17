import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkDto } from './create-work.dto';

export class UpdateWorkDto extends PartialType(CreateWorkDto) {} //pone todos los campos del create en opcional para actualizar
