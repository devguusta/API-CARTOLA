import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAllStartVoting71674857902442 implements MigrationInterface {
    name = 'updateAllStartVoting71674857902442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD "user" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP COLUMN "user"`);
    }

}
