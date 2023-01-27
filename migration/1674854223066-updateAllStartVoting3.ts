import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAllStartVoting31674854223066 implements MigrationInterface {
    name = 'updateAllStartVoting31674854223066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP COLUMN "votes"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD "votes" integer NOT NULL`);
    }

}
