import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Tag } from './Tag';

@Entity('cards')
class Card {
  @PrimaryColumn()
  id?: string;

  @Column()
  texto: string;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'tags_cards',
    joinColumns: [{ name: 'card_id' }],
    inverseJoinColumns: [{ name: 'tag_id' }],
  })
  tags_cards: Tag[];
  @CreateDateColumn()
  data_criacao: Timestamp;

  @UpdateDateColumn()
  data_modificacao: Timestamp;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Card };
