import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNbaTeam1673478783749 implements MigrationInterface {
    name = 'UpdateNbaTeam1673478783749'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nba_team" ("id" SERIAL NOT NULL, "teamId" integer NOT NULL, "name" character varying NOT NULL, "nickname" character varying NOT NULL, "code" character varying NOT NULL, "city" character varying NOT NULL, "logo" character varying, "nbaFranchise" boolean NOT NULL, "allStar" boolean NOT NULL, CONSTRAINT "PK_25dbd97fd11336d978b5eb19374" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "nba_team"`);
    }

}
