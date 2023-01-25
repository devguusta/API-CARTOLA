import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAllStartVoting21674659633193 implements MigrationInterface {
    name = 'updateAllStartVoting21674659633193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nba_all_star_voting" ("id" SERIAL NOT NULL, "idPlayer" SERIAL NOT NULL, "votes" integer NOT NULL, "userId" integer, CONSTRAINT "REL_ee8ba737361eceb66b16c424a8" UNIQUE ("userId"), CONSTRAINT "PK_aedd84bc854136b31e03a905787" PRIMARY KEY ("id", "idPlayer"))`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD CONSTRAINT "FK_ee8ba737361eceb66b16c424a82" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP CONSTRAINT "FK_ee8ba737361eceb66b16c424a82"`);
        await queryRunner.query(`DROP TABLE "nba_all_star_voting"`);
    }

}
