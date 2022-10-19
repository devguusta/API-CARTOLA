import { MigrationInterface, QueryRunner } from "typeorm"

export class User1666137836132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `CREATE TABLE IF NOT EXISTS user `
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
