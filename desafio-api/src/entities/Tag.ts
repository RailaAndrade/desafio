import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tags')
class Tag {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Tag };
