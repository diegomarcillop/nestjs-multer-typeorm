import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';
import { Repository } from 'typeorm';
import { UpdateCat } from './dto/updateCat';
 
@Injectable()
export class CatService {
    
    constructor(
        @InjectRepository(Cat)
        private readonly catRepeository: Repository<Cat>
    ){}

    async getCat(idCat: number){
        const cat = await this.catRepeository.findOne({
            where:`cat.id = ${idCat}`
        })
        return cat;
    }

    async getCatAll(){
        const cats = await this.catRepeository.find();
        return cats;
    }
    
    async createCat(cat: UpdateCat){
        const result = await this.catRepeository
        .createQueryBuilder()
        .insert()
        .into("cat")
        .values(cat)
        .execute();
        return result;
    }
}
