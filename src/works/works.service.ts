import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Work } from './entities/work.entity';
import { Repository } from 'typeorm';

import { Section } from 'src/sections/entities/section.entity';

@Injectable()
export class WorksService {
  constructor(
    @InjectRepository(Work)
    private readonly worksRepository: Repository<Work>,
    @InjectRepository(Section)
    private readonly sectionsRepository: Repository<Section>,
  ) {}
  async create(createWorkDto: CreateWorkDto) {
    const section = await this.sectionsRepository.findOneBy({
      name: createWorkDto.section.name,
    });

    if (!section) {
      throw new BadRequestException('section not found');
    }

    const newWork = this.worksRepository.create({
      ...createWorkDto,
      section,
    });
    return this.worksRepository.save(newWork);
  }

  async findAll() {
    return await this.worksRepository.find();
  }

  async findOne(id: number) {
    return await this.worksRepository.findOneBy({ id });
  }

  async findEachVehicles(vehicle: string) {
    const sectionVehicle = await this.sectionsRepository.findOneBy({
      vehicle: vehicle,
    });
    if (!sectionVehicle) {
      throw new BadRequestException('vehicle not found');
    }

    const findWorksByVehicle = await this.worksRepository.findBy({
      section: sectionVehicle,
    });

    return findWorksByVehicle;
  }

  async findCarWorks(name: string) {
    return await this.worksRepository.findBy({ name });
  }

  async update(id: number, updateWorkDto: UpdateWorkDto) {
    const work = await this.worksRepository.findOneBy({ id });
    if (!work) {
      throw new BadRequestException('work doesnt exist');
    }
    return await this.worksRepository.update(id, updateWorkDto);
  }
  // softDelete
  async remove(id: number) {
    return await this.worksRepository.softDelete({ id });
  }
  async restore(id: number) {
    return await this.worksRepository.restore(id);
  }
}
