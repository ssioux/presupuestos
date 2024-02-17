import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  findAll() {
    return `This action returns all clients`;
  }
}
