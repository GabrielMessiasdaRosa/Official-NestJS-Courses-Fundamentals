import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1701281348249 implements MigrationInterface {
    name = 'SchemaSync1701281348249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Coffees" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Coffees" DROP COLUMN "description"`);
    }

}
