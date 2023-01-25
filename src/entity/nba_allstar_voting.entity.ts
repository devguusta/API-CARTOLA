import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { NbaPlayer } from "./nba_player.entity";
import { User } from "./user.entity";

@Entity()
export class NbaAllStarVoting{
    @PrimaryGeneratedColumn()
    id: number;
    
    @PrimaryGeneratedColumn()
    idPlayer: number;

    @Column()
    votes: number;

    @OneToMany(() => NbaPlayer, (player) => player.idPlayer)
    player: NbaPlayer[];

    @OneToOne(()=> User)
    @JoinColumn()
    user: User;


}