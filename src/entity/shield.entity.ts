import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";
@Entity()
export class Shield{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imageUrl: string;
    @Column()
    teamId: number;

    @ManyToOne(() => Team)
    @JoinColumn({name: "teamId"})
    team: Team;
}