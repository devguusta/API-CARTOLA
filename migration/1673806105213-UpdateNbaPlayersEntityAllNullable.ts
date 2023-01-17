import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNbaPlayersEntityAllNullable1673806105213 implements MigrationInterface {
    name = 'UpdateNbaPlayersEntityAllNullable1673806105213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "birth" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "country" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "college" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "affiliation" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "jersey" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "active" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "position" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "start" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "start" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "position" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "active" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "jersey" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "affiliation" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "college" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "country" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nba_player" ALTER COLUMN "birth" SET NOT NULL`);
    }

}
