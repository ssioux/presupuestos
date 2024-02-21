import { MigrationInterface, QueryRunner } from 'typeorm';

export class NewMigrations1708517100600 implements MigrationInterface {
  name = 'NewMigrations1708517100600';

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
