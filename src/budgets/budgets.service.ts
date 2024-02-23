import { Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/clients/entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BudgetsService {
  constructor(
    @InjectRepository(Budget)
    private readonly budgetsRepository: Repository<Budget>,
    @InjectRepository(Client)
    private readonly clientsRepository: Repository<Client>,
  ) {}

  async create(createBudgetDto: CreateBudgetDto) {
    const client = await this.clientsRepository.findOneBy({
      lastName: createBudgetDto.client.phone || createBudgetDto.client.email,
    });
    console.log('🚀 ~ client: ', client);

    if (!client) {
      const createClient = this.clientsRepository.create({
        description: createBudgetDto.client.description,
        lastName: createBudgetDto.client.lastName,
        firstName: createBudgetDto.client.firstName,
        email: createBudgetDto.client.email,
        phone: createBudgetDto.client.phone,
        type: createBudgetDto.client.type,
      });

      const clientSaved = await this.clientsRepository.save(createClient);

      const nWork = this.budgetsRepository.create({
        ...createBudgetDto,
        client: clientSaved,
      });
      return this.budgetsRepository.save(nWork);
    } else {
      const newBudget = this.budgetsRepository.create({
        ...createBudgetDto,
        client,
      });
      return this.budgetsRepository.save(newBudget);
    }
  }

  async findAll() {
    return await this.budgetsRepository.find();
  }

  findLastDays(days: number) {
    return `This action returns all budgets from the last #${days} days`;
  }

  async findOne(id: number) {
    return await this.budgetsRepository.findOneBy({ id });
  }

  update(id: number, updateBudgetDto: UpdateBudgetDto) {
    return `This action updates a #${id} budget`;
  }

  remove(id: number) {
    return `This action removes a #${id} budget`;
  }
}
