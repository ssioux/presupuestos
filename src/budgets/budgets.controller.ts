import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetsService.create(createBudgetDto);
  } // * NOTA 1: el ID del usuario que realiza la operación llega en el header th-user de la petición. NOTA 2: if client doesnt exist(searching DB by email or phone)

  @Get()
  findAll() {
    return this.budgetsService.findAll();
  }

  @Get('/last/:days')
  findLastDays(@Param('days') days: number) {
    return this.budgetsService.findLastDays(days);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateBudgetDto) {
    return this.budgetsService.update(+id, updateBudgetDto);
  } // no update user & clients

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetsService.remove(+id);
  } // softDelete

  @Patch('/restore/:id')
  restore(@Param('id') id: string) {
    return this.budgetsService.restore(+id);
  }
}
