import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { ClientsModule } from 'src/clients/clients.module';
import { ClientsService } from 'src/clients/clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Budget]), ClientsModule],
  controllers: [BudgetsController],
  providers: [BudgetsService, ClientsService],
})
export class BudgetsModule {}
