import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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

}