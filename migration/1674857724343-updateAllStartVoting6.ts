import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAllStartVoting61674857724343 implements MigrationInterface {
    name = 'updateAllStartVoting61674857724343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP CONSTRAINT "FK_ee8ba737361eceb66b16c424a82"`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP CONSTRAINT "REL_ee8ba737361eceb66b16c424a8"`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP COLUMN "userId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD CONSTRAINT "REL_ee8ba737361eceb66b16c424a8" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD CONSTRAINT "FK_ee8ba737361eceb66b16c424a82" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
