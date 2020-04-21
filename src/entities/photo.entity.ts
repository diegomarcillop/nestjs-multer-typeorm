import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cat } from './cat.entity';

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column( "varchar", { length: 300})
    url: string;

    @Column("varchar", { length: 20})
    state: string;

    @ManyToOne(type => Cat)
    @JoinColumn({ name: "catId"})
    catId: number;
}