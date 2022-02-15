import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../../repositories/ICardsRepository';

@injectable()
class DeleteCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
  ) {}

  async execute(id: string) {
    this.cardsRepository.delete(id);
  }
}

export { DeleteCardUseCase };
