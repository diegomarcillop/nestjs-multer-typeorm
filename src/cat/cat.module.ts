import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService]
})
export class CatModule {}
