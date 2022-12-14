import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTeam1671041550299 implements MigrationInterface {
    name = 'CreateTeam1671041550299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shield" ("id" SERIAL NOT NULL, "imageUrl" character varying NOT NULL, "teamId" integer NOT NULL, CONSTRAINT "PK_3838be0f095a8002600bcf24ee8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "teamId" integer NOT NULL, "name" character varying NOT NULL, "nickName" character varying NOT NULL, "abbreviationName" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shield" ADD CONSTRAINT "FK_8ccb1a38c4db65f7190ae0d1637" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shield" DROP CONSTRAINT "FK_8ccb1a38c4db65f7190ae0d1637"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "shield"`);
    }

}
