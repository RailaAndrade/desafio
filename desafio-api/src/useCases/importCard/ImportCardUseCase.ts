import { parse } from 'csv-parse';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';
import { Tag } from '../../entities/Tag';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { ITagsRepository } from '../../repositories/ITagsRepository';

interface IImportCard {
  texto: string;
  tags: string[];
}

@injectable()
class ImportCardUseCase {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  loadTags(file: Express.Multer.File): Promise<IImportCard[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const cards: IImportCard[] = [];
      const parseFile = parse();
      stream.pipe(parseFile);
      parseFile
        .on('data', async (line) => {
          const [texto, tags] = line;

          const tagsArray = tags.split(';');

          cards.push({
            texto,
            tags: tagsArray,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(cards);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const cards = await this.loadTags(file);

    cards.map(async (card) => {
      const { texto, tags } = card;
      let cardsObjects = tags.map(async (tagText) => {
        let existentCard = await this.tagsRepository.findByName(tagText);
        if (existentCard) {
          return existentCard;
        } else {
          return undefined;
        }
      });
      let noUndefinedCards: any;
      let result = await Promise.all(cardsObjects);

      noUndefinedCards = result.filter((element) => {
        if (element !== undefined) {
          return element;
        }
      });
      await this.cardsRepository.create({
        texto,
        tags_cards: noUndefinedCards,
      });
    });
  }
}

export { ImportCardUseCase };
