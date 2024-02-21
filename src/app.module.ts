import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WorksModule } from './works/works.module';
import { BudgetsModule } from './budgets/budgets.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    WorksModule,
    BudgetsModule,
    ClientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true, // entities: [] putting the entities for ORM to create the table
      synchronize: false, // "true" - not recommended for production
    }),
    SectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
