import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Update } from './dto/update';

@Controller('photo')
export class PhotoController {

    constructor(
        private readonly photoService: PhotoService
    ){}

    @Get("/:id")
    async getPhoto(@Param() photoId: number){
        return await this.photoService.getPhoto(photoId);
    }
    
    @Get()
    async getPhotoAll(){
        return await this.photoService.getPhotoAll();
    }

    @Post()
    async createPhoto(@Body() photo: Update){
        return await this.photoService.createPhoto(photo);
    }
}
