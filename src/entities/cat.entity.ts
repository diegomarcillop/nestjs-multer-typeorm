import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
 
@Entity("cat")
export class Cat{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar",{ length: 100 })
    name: string;

    @Column("varchar",{ length: 500 })
    description:  string;
}