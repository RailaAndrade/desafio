import { getRepository, Repository } from 'typeorm';
import { Card } from '../../entities/Card';

import { ICreateCardDTO, ICardsRepository } from '../ICardsRepository';

class CardsRepository implements ICardsRepository {
  private repository: Repository<Card>;

  constructor() {
    this.repository = getRepository(Card);
  }
  async list(): Promise<Card[]> {
    const cards = await this.repository.find();
    return cards;
  }

  async create({ texto, tags_cards }: ICreateCardDTO) {
    const card = this.repository.create({
      texto,
      tags_cards,
    });
    await this.repository.save(card);
  }

  async findById(id: string): Promise<Card | undefined> {
    const card = await this.repository.findOne({ id });

    return card;
  }
  async update(card: Card): Promise<Card | undefined> {
    if (card) {
      await this.repository.save(card);
      return card;
    }
  }
  async delete(id: string) {
    await this.repository.delete({ id });
  }
}

export { CardsRepository };
