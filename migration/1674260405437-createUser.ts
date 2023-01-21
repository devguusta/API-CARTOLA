import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1674260405437 implements MigrationInterface {
    name = 'createUser1674260405437'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "admin" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "round" ("id" SERIAL NOT NULL, "currentRound" integer NOT NULL, "scheduledTeams" integer NOT NULL, "closed" TIMESTAMP NOT NULL, CONSTRAINT "PK_34bd959f3f4a90eb86e4ae24d2d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shield" ("id" SERIAL NOT NULL, "imageUrl" character varying NOT NULL, "teamId" integer NOT NULL, CONSTRAINT "PK_3838be0f095a8002600bcf24ee8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "teamId" integer NOT NULL, "name" character varying NOT NULL, "nickName" character varying NOT NULL, "abbreviationName" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nba_player" ("id" SERIAL NOT NULL, "idPlayer" integer NOT NULL, "birth" TIMESTAMP, "name" character varying NOT NULL, "country" character varying, "height" character varying, "weight" character varying, "college" character varying, "affiliation" character varying, "jersey" integer, "active" boolean, "position" character varying, "start" integer, "teamId" integer, CONSTRAINT "PK_4613093a274ff587cc33d041fc4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nba_team" ("id" SERIAL NOT NULL, "teamId" integer NOT NULL, "name" character varying NOT NULL, "nickname" character varying NOT NULL, "code" character varying NOT NULL, "city" character varying NOT NULL, "logo" character varying, "nbaFranchise" boolean NOT NULL, "allStar" boolean NOT NULL, CONSTRAINT "PK_25dbd97fd11336d978b5eb19374" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shield" ADD CONSTRAINT "FK_8ccb1a38c4db65f7190ae0d1637" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "nba_player" ADD CONSTRAINT "FK_2e6801ea845176e8044e1260b71" FOREIGN KEY ("teamId") REFERENCES "nba_team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_player" DROP CONSTRAINT "FK_2e6801ea845176e8044e1260b71"`);
        await queryRunner.query(`ALTER TABLE "shield" DROP CONSTRAINT "FK_8ccb1a38c4db65f7190ae0d1637"`);
        await queryRunner.query(`DROP TABLE "nba_team"`);
        await queryRunner.query(`DROP TABLE "nba_player"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "shield"`);
        await queryRunner.query(`DROP TABLE "round"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
