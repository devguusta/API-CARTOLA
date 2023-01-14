import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { NbaPlayer } from "./nba_player.entity";

@Entity()
export class NbaTeam{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    teamId: number;

    @Column()
    name: string;

    @Column()
    nickname: string;
    @Column()
    code: string;

    @Column()
    city: string;

    @Column({
        nullable: true
    })
    logo: string;

    @Column()
    nbaFranchise: boolean;

    @Column()
    allStar: boolean;

    @OneToMany(() => NbaPlayer, (player) => player.team)
    players: NbaPlayer[];

}