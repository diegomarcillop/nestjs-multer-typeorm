import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cat } from './cat.entity';

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column( "varchar", { length: 200})
    name: string;

    @Column( "varchar", { length: 300})
    url: string;

    @Column("varchar", { length: 20,  default: "active"})
    state: string;

    @ManyToOne(type => Cat, cat => cat.id)
    @JoinColumn({ name: "catId"})
    catId: number;
}