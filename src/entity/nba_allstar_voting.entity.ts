import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { NbaPlayer } from "./nba_player.entity";
import { User } from "./user.entity";

@Entity()
export class NbaAllStarVoting{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    idPlayer: number;


    @Column()
    position: string
    @Column()
    user: number;


}