import { MigrationInterface, QueryRunner } from "typeorm";

export class Pss1708861490904 implements MigrationInterface {
    name = 'Pss1708861490904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price1" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price2" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price3" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price4" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "priceGapMod" TYPE numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "priceGapMod" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price4" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price3" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price2" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "work" ALTER COLUMN "price1" TYPE numeric`);
    }

}
