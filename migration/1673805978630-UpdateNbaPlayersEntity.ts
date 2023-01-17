import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNbaPlayersEntity1673805978630 implements MigrationInterface {
    name = 'UpdateNbaPlayersEntity1673805978630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "height" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "weight" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "weight" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "height" SET NOT NULL`);
    }

}
