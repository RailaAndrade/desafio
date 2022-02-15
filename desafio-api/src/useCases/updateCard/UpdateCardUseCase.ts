import { inject, injectable } from 'tsyringe';
import { Card } from '../../entities/Card';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { ITagsRepository } from '../../repositories/ITagsRepository';

interface IRequest {
  id: string;
  texto: string;
  tags: string[];
}

@injectable()
class UpdateCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute({ id, texto, tags }: IRequest): Promise<Card> {
    const card = await this.cardsRepository.findById(id);

    if (!card) {
      throw new Error('Card não existe');
    }

    let tagsId = tags.map(async (tagText) => {
      let teste = await this.tagsRepository.findByName(tagText);
      if (teste) {
        return teste;
      } else {
        return undefined;
      }
    });
    let teste2: any;
    let result = await Promise.all(tagsId);

    teste2 = result.filter((element) => {
      if (element !== undefined) {
        return element;
      }
    });

    card.texto = texto;
    card.tags_cards = teste2;

    await this.cardsRepository.update(card);

    return card;
  }
}

export { UpdateCardUseCase };
