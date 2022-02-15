import { inject, injectable } from 'tsyringe';
import { Card } from '../../entities/Card';
import { ICardsRepository } from '../../repositories/ICardsRepository';

@injectable()
class ListCardsUseCase {
  constructor(@inject('CardsRepository') private cardsRepository: ICardsRepository | null) {}
  async execute() {
    if (this.cardsRepository !== null) {
      const tags = await this.cardsRepository.list();
      return tags;
    }
  }
}

export { ListCardsUseCase };
