import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatModule } from './cat/cat.module';
import { Connection } from 'typeorm';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
