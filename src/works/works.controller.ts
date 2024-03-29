import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorksService } from './works.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('works')
@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Post()
  async create(@Body() createWorkDto: CreateWorkDto) {
    return await this.worksService.create(createWorkDto);
    // try {
    //   return await this.worksService.create(createWorkDto);
    // } catch (error) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: 'something went wrong',
    //     },
    //     HttpStatus.FORBIDDEN,
    //     {
    //       cause: error,
    //     },
    //   );
    // }
  }

  @Get()
  findAll() {
    return this.worksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.worksService.findOne(+id);
  }

  @Get('/:vehicle/name-vehicle')
  findEachVehicles(@Param('vehicle') vehicle: string) {
    return this.worksService.findEachVehicles(vehicle);
  } // search every selected vehicle in the database

  @Get('/vehicle/:name')
  findCarWorks(@Param('name') name: string) {
    return this.worksService.findCarWorks(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.worksService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worksService.remove(+id);
  } // softDelete

  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.worksService.delete(+id);
  // } // softDelete?

  @Patch('/restore/:id')
  restore(@Param('id') id: string) {
    return this.worksService.restore(+id);
  }
}
