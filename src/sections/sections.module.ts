import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { Section } from './entities/section.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  providers: [SectionsService],
  exports: [TypeOrmModule],
})
export class SectionsModule {}
