import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAllStartVoting41674855270145 implements MigrationInterface {
    name = 'updateAllStartVoting41674855270145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD "position" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP COLUMN "position"`);
    }

}
