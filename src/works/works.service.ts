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
    console.log('🚀 ~ WorksService ~ create ~ section:', section);

    if (!section) {
      const createSection = this.sectionsRepository.create({
        description: createWorkDto.section.description,
        name: createWorkDto.section.name,
        vehicle: createWorkDto.section.vehicle,
      });
      console.log('🚀 ~  createSection:', createSection);

      const sectionSaved = await this.sectionsRepository.save(createSection);
      console.log('🚀  sectionSaved:', sectionSaved);
      const nWork = this.worksRepository.create({
        ...createWorkDto,
        section: sectionSaved,
      });
      return this.worksRepository.save(nWork);
    } else {
      const newWork = this.worksRepository.create({
        ...createWorkDto,
        section,
      });
      return this.worksRepository.save(newWork);
    }
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
