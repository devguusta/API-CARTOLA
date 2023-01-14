import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NbaTeam } from "./nba_team.entity";
@Entity()
export class NbaPlayer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idPlayer: number;

    @Column()
    birth: Date;

    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    height: string;

    @Column()
    weight: string;

    @Column()
    college: string;

    @Column()
    affiliation: string;

    @Column()
    jersey: number;

    @Column()
    active: boolean;

    @Column()
    position: string;

    @Column()
    start: number;

    @ManyToOne(() => NbaTeam)
    @JoinColumn({name: "teamId"})
    team: NbaTeam;
}