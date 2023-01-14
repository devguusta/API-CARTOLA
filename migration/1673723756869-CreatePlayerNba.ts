import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePlayerNba1673723756869 implements MigrationInterface {
    name = 'CreatePlayerNba1673723756869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nba_player" ("id" SERIAL NOT NULL, "idPlayer" integer NOT NULL, "birth" TIMESTAMP NOT NULL, "name" character varying NOT NULL, "country" character varying NOT NULL, "height" character varying NOT NULL, "weight" character varying NOT NULL, "college" character varying NOT NULL, "affiliation" character varying NOT NULL, "jersey" integer NOT NULL, "active" boolean NOT NULL, "position" character varying NOT NULL, "start" integer NOT NULL, "teamId" integer, CONSTRAINT "PK_4613093a274ff587cc33d041fc4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "nba_player" ADD CONSTRAINT "FK_2e6801ea845176e8044e1260b71" FOREIGN KEY ("teamId") REFERENCES "nba_team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_player" DROP CONSTRAINT "FK_2e6801ea845176e8044e1260b71"`);
        await queryRunner.query(`DROP TABLE "nba_player"`);
    }

}
