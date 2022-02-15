import { Card } from '../entities/Card';
import { Tag } from '../entities/Tag';
interface ICreateCardDTO {
  texto: string;
  tags_cards: Tag[];
}
interface ICardsRepository {
  create({ texto, tags_cards }: ICreateCardDTO): Promise<void>;
  list(): Promise<Card[]>;

  findById(id: string): Promise<Card | undefined>;
  delete(id: string): Promise<void>;
  update(card: Card): Promise<Card | undefined>;
}
export { ICardsRepository, ICreateCardDTO };
