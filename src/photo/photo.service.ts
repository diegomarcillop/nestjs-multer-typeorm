import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'src/entities/photo.entity';
import { Repository } from 'typeorm';
import { Update } from './dto/update';

@Injectable()
export class PhotoService {

    constructor(
        @InjectRepository(Photo)
        private readonly photoRepository: Repository<Photo>
    ){}

    async getPhoto(photoId: number){
        const photo = this.photoRepository.findOne({
            where:`phto.id = ${photoId}`, relations:["cat"] 
        });
        
        return photo;
    }

    async getPhotoAll(){
        const photos = await this.photoRepository.find({
            relations:["cat"] 
        });
        return photos;
    }

    async createPhoto(photo: Update){
        const result = await this.photoRepository
        .createQueryBuilder()
        .insert()
        .into("photo")
        .values(photo)
        .execute();
        return result;
    }

}
