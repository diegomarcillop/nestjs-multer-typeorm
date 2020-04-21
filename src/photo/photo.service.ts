import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'src/entities/photo.entity';
import { Repository } from 'typeorm';
import { Update } from './dto/updatePhoto';

@Injectable()
export class PhotoService {

    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>
    ){}

    async getPhoto(id: number){
        const photo = this.photoRepository.findOne({
            where:`photo.id = ${id}`, relations:["catId"] 
        });
        return photo;
    }

    async getPhotoAll(){
        const photos = await this.photoRepository.find({
            relations:["catId"] 
        });
        return photos;
    }

    async createPhoto(photo: Update[]){
        const result = await this.photoRepository
        .createQueryBuilder()
        .insert()
        .into("photo")
        .values(photo)
        .execute();
        return result;
    }
}
