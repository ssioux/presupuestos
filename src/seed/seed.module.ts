import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { WorksModule } from 'src/works/works.module';

@Module({
  imports: [WorksModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
