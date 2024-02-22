import { Injectable } from '@nestjs/common';
import { initialData } from './data/initialSeed';
import { WorksService } from 'src/works/works.service';

@Injectable()
export class SeedService {
  constructor(private readonly worksService: WorksService) {}
  async importDataFromFile() {
    try {
      await this.insertNewWorks();

      return 'seed execute';
    } catch (error) {
      console.error('Error importing Data: ', error);
    }
  }
  private async insertNewWorks() {
    const works = initialData.works;

    const insertPromises = [];
    works.forEach((eachWork) => {
      insertPromises.push(this.worksService.create(eachWork));
    });

    await Promise.all(insertPromises);
    return true;
  }
}
