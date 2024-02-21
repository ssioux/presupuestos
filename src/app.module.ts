import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WorksModule } from './works/works.module';
import { BudgetsModule } from './budgets/budgets.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionsModule } from './sections/sections.module';
import { dataSourceOptions } from '../db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WorksModule,
    BudgetsModule,
    ClientsModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    SectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
