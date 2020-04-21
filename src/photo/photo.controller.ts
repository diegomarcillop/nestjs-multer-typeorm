import { Controller, Get, Param, Body, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import {  diskStorage  } from 'multer';
import { fileName, imgFilter } from 'src/utils/multer/img-update.utils.';
import { Update } from './dto/updatePhoto';
@Controller('api/photo')
export class PhotoController {

    constructor(
        private readonly photoService: PhotoService
    ){}

    @Get("/:id")
    async getPhoto(@Param("id") id: number){
            return await this.photoService.getPhoto(id);
    }
    
    @Get()
    async getPhotoAll(){
        return await this.photoService.getPhotoAll();
    }

    @Post("/:catId")
    @UseInterceptors(FilesInterceptor("image", 10, {
        storage: diskStorage({
            destination: './img',
            filename: fileName
        }),
        fileFilter: imgFilter
    }))

    async uploadedFile(@UploadedFiles() files, @Param("catId") id: number ){
        const response = []; 
        files.forEach( async file => {
            const imgReponse = new Update();
            imgReponse.name = file.filename;
            imgReponse.url = file.path;
            imgReponse.state = "active";
            imgReponse.catId = id; 
            response.push(imgReponse);
            console.log(id);
        });      
        return await this.photoService.createPhoto(response);
    }
}
