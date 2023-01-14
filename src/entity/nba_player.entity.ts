import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class NbaPlayer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idPlayer: string;

    @Column()
    birth: Date;

    @Column()
    country: string;

    @Column()
    height: string;

    @Column()
    width: string;

    @Column()
    college: string;

    @Column()
    affiliation: string;

    @Column()
    jersey: string;

    @Column()
    active: boolean;

    @Column()
    position: string;

    @Column()
    start: number;
}