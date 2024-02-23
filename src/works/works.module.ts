import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { SectionsModule } from 'src/sections/sections.module';
import { SectionsService } from 'src/sections/sections.service';
import { BudgetsModule } from 'src/budgets/budgets.module';

@Module({
  imports: [TypeOrmModule.forFeature([Work]), SectionsModule, BudgetsModule],
  controllers: [WorksController],
  providers: [WorksService, SectionsService],
  exports: [TypeOrmModule, WorksService],
})
export class WorksModule {}
