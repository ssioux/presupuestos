import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { SectionsModule } from 'src/sections/sections.module';
import { SectionsService } from 'src/sections/sections.service';

@Module({
  imports: [TypeOrmModule.forFeature([Work]), SectionsModule],
  controllers: [WorksController],
  providers: [WorksService, SectionsService],
  exports: [TypeOrmModule],
})
export class WorksModule {}
