import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';
import { Repository } from 'typeorm';
import { Update } from 'src/photo/dto/update';

@Injectable()
export class CatService {
    
    constructor(
        @InjectRepository(Cat)
        private readonly catRepeository: Repository<Cat>
    ){}

    async getCat(idCat: number){
        const cat = await this.catRepeository.findOne({
            where:`cat.id = ${idCat}`, relations: ["photo"]
        })
        return cat;
    }

    async getCatAll(idCat: number){
        const cats = await this.catRepeository.find({
            relations: ["photo"]
        })
        return cats;
    }
    
    async createPhoto(cat: Update){
        const result = await this.catRepeository
        .createQueryBuilder()
        .insert()
        .into("cat")
        .values(cat)
        .execute();
        return result;
    }
}
