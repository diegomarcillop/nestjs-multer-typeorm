import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { Update } from 'src/photo/dto/updatePhoto';
import { UpdateCat } from './dto/updateCat';

@Controller('api/cat')
export class CatController {
    constructor(
        private readonly catService: CatService
    ){}

    @Get("/:id")
    async getCat(@Param("id")id: number){
        return await this.catService.getCat(id);
    }

    @Get()
    async getCatAll(){
        return await this.catService.getCatAll();;
    }

    @Post()
    async createCat(@Body() cat: UpdateCat){
        return await this.catService.createCat(cat);
    }

}
