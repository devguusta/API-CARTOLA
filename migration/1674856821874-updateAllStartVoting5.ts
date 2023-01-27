import { MigrationInterface, QueryRunner } from "typeorm";

export class updateAllStartVoting51674856821874 implements MigrationInterface {
    name = 'updateAllStartVoting51674856821874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP CONSTRAINT "PK_aedd84bc854136b31e03a905787"`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD CONSTRAINT "PK_40eba590fc2537e73e08d290bfc" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ALTER COLUMN "idPlayer" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "nba_all_star_voting_idPlayer_seq"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "nba_all_star_voting_idPlayer_seq" OWNED BY "nba_all_star_voting"."idPlayer"`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ALTER COLUMN "idPlayer" SET DEFAULT nextval('"nba_all_star_voting_idPlayer_seq"')`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" DROP CONSTRAINT "PK_40eba590fc2537e73e08d290bfc"`);
        await queryRunner.query(`ALTER TABLE "nba_all_star_voting" ADD CONSTRAINT "PK_aedd84bc854136b31e03a905787" PRIMARY KEY ("id", "idPlayer")`);
    }

}
