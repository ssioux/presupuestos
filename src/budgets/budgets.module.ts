import { Module, forwardRef } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './entities/budget.entity';
import { ClientsModule } from 'src/clients/clients.module';
import { ClientsService } from 'src/clients/clients.service';
import { WorksModule } from 'src/works/works.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Budget]),
    forwardRef(() => ClientsModule),
    forwardRef(() => WorksModule),
  ],
  controllers: [BudgetsController],
  providers: [BudgetsService, ClientsService],
  exports: [TypeOrmModule, BudgetsModule],
})
export class BudgetsModule {}
