import { inject, injectable } from 'tsyringe';
import { Tag } from '../../entities/Tag';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { ITagsRepository } from '../../repositories/ITagsRepository';

interface IRequest {
  texto: string;
  tags: string[];
}

@injectable()
class CreateCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute({ texto, tags }: IRequest) {
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

    await this.cardsRepository.create({ texto, tags_cards: teste2 });
  }
}

export { CreateCardUseCase };
