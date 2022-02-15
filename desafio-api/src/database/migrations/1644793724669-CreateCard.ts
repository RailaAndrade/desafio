import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCard1644793724669 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cards',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'texto',
            type: 'varchar',
          },
          {
            name: 'data_criacao',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'data_modificacao',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cards');
  }
}

/*        foreignKeys: [
          {
            name: 'FKTagCard',
            referencedTableName: 'cards',
            referencedColumnNames: ['id'],
            columnNames: ['id'],
          },
          {
            name: 'FKCardTag',
            referencedTableName: 'tags',
            referencedColumnNames: ['id'],
            columnNames: ['tag_id'],
          },
        ],*/
