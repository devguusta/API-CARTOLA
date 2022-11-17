import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUserAdmin1668647600438 implements MigrationInterface {
    name = 'updateUserAdmin1668647600438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "admin"`);
    }

}
