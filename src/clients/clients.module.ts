import { Module, forwardRef } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { Client } from './entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetsModule } from 'src/budgets/budgets.module';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), forwardRef(() => BudgetsModule)],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [TypeOrmModule, ClientsModule],
})
export class ClientsModule {}
