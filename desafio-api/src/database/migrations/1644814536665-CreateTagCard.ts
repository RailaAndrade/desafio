import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTagCard1644814536665 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tags_cards',
        columns: [
          {
            name: 'card_id',
            type: 'uuid',
          },
          {
            name: 'tag_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'tags_cards',
      new TableForeignKey({
        name: 'FKTagCard',
        referencedTableName: 'cards',
        referencedColumnNames: ['id'],
        columnNames: ['card_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    ),
      await queryRunner.createForeignKey(
        'tags_cards',
        new TableForeignKey({
          name: 'FKCardTag',
          referencedTableName: 'tags',
          referencedColumnNames: ['id'],
          columnNames: ['tag_id'],
          onDelete: 'SET NULL',
          onUpdate: 'SET NUll',
        }),
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tags_cards', 'FKCardTag');
    await queryRunner.dropForeignKey('tags_cards', 'FKTagCard');
    await queryRunner.dropTable('tags_cards');
  }
}
