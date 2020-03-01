// import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


// import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column('date') 
    birthday:Date;

    @Column() 
    isActive:boolean;
}