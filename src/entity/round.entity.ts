import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Round{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    currentRound: number;

    @Column()
    scheduledTeams: number;


    @Column()
    closed: Date;


}