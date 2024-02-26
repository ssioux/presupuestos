import { BadRequestException, Injectable } from '@nestjs/common';
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
  // create a new budget
  async create(createBudgetDto: CreateBudgetDto) {
    // * Find the client in DB by Number phone or email
    // (i think one of this two should be required in the entity) also works selected in the frontend
    const client =
      (await this.clientsRepository.findOneBy({
        phone: createBudgetDto.client.phone,
      })) ||
      (await this.clientsRepository.findOneBy({
        email: createBudgetDto.client.email,
      }));
    console.log('🚀 ~ client: ', client);
    // if the client doesnt exist is created
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

      const newBudget = this.budgetsRepository.create({
        ...createBudgetDto,
        client: clientSaved,
      });
      return this.budgetsRepository.save(newBudget);
    } else {
      const newBudget = this.budgetsRepository.create({
        ...createBudgetDto,
        client,
      });
      return this.budgetsRepository.save(newBudget);
    }
  }
  // find all budgets
  async findAll() {
    return await this.budgetsRepository.find();
  }
  // find budgets in the last # days
  findLastDays(days: number) {
    return `This action returns all budgets from the last #${days} days`;
  }
  // find one budget by id
  async findOne(id: number) {
    return await this.budgetsRepository.findOneBy({ id });
  }
  // updates one budget by id
  async update(id: number, updateBudgetDto: UpdateBudgetDto) {
    const budget = await this.budgetsRepository.findOneBy({ id });
    if (!budget) {
      throw new BadRequestException('budget doesnt exist');
    }
    return await this.budgetsRepository.update(id, updateBudgetDto);
  }
  // budget softdelete
  async remove(id: number) {
    return await this.budgetsRepository.softDelete({ id });
  }
  // restore budget softdelete
  async restore(id: number) {
    return await this.budgetsRepository.restore(id);
  }
}
