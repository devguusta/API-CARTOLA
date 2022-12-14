import { Shield } from "./shield.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    teamId: number;

    @Column()
    name: string;

    @Column()
    nickName: string;

    @Column()
    abbreviationName: string;

    @OneToMany(() => Shield, (shield) => shield.team)
    shield: Shield[];
}