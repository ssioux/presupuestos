import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './entities/section.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class SectionsService {
  constructor(
    @InjectRepository(Section)
    private sectionsRepository: Repository<Section>,
  ) {}

  create(createSectionDto: CreateSectionDto) {
    const newSection = this.sectionsRepository.create(createSectionDto);
    return this.sectionsRepository.save(newSection);
  }

  findAll() {
    return `This action returns all sections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} section`;
  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return `This action updates a #${id} section`;
  }

  remove(id: number) {
    return `This action removes a #${id} section`;
  }
}
