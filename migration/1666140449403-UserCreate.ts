import { MigrationInterface, QueryRunner } from "typeorm";

export class UserCreate1666140449403 implements MigrationInterface {
    name = 'UserCreate1666140449403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "admin"`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "admin"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "admin" boolean NOT NULL`);
    }

}
