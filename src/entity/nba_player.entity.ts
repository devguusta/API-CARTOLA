import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NbaTeam } from "./nba_team.entity";
@Entity()
export class NbaPlayer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idPlayer: number;
    
    @Column({nullable: true})
    birth: Date;

    @Column()
    name: string;

    @Column({nullable: true})
    country: string;

    @Column({nullable: true})
    height: string;

    @Column({nullable: true})
    weight: string;

    @Column({nullable: true})
    college: string;

    @Column({nullable: true})
    affiliation: string;

    @Column({nullable: true})
    jersey: number;

    @Column({nullable: true})
    active: boolean;

    @Column({nullable: true})
    position: string;

    @Column({nullable: true})
    start: number;

    @ManyToOne(() => NbaTeam)
    @JoinColumn({name: "teamId"})
    team: NbaTeam;
}