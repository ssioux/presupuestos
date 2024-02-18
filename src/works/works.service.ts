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

  findAll() {
    return this.worksRepository.find();
  }

  findOne(id: number) {
    return this.worksRepository.findOneBy({ id });
  }

  findEachVehicles(vehicle: string) {
    return `This action returns the #${vehicle} works`;
  }

  findCarWorks(name: string) {
    return `This action returns the #${name} works`;
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return this.worksRepository.update(id, updateWorkDto);
  }

  restore(id: number, updateWorkDto: UpdateWorkDto) {
    return this.worksRepository.update(id, updateWorkDto);
  } // deleteAt null

  remove(id: number) {
    return this.worksRepository.softDelete({ id }); // borrado logico con softdelete
  }
}
