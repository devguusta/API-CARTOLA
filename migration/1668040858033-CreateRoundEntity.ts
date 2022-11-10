import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRoundEntity1668040858033 implements MigrationInterface {
    name = 'CreateRoundEntity1668040858033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "round" ("id" SERIAL NOT NULL, "currentRound" integer NOT NULL, "scheduledTeams" integer NOT NULL, "closed" TIMESTAMP NOT NULL, CONSTRAINT "PK_34bd959f3f4a90eb86e4ae24d2d" PRIMARY KEY ("id"))`);
     
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "admin"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "admin" boolean NOT NULL`);
        await queryRunner.query(`DROP TABLE "round"`);
    }

}
