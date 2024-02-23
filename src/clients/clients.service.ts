import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    this.clientsRepository.create(createClientDto);
    return 'pepe';
    // return this.clientsRepository.save(newClient);
  }
  // devuelve todos los clientes
  findAll() {
    return this.clientsRepository.find();
  }
}
