import { ITagsRepository } from '../../repositories/ITagsRepository';
import { TagsRepository } from '../../repositories/implementations/TagsRepository';
import { container } from 'tsyringe';
import { CardsRepository } from '../../repositories/implementations/CardsRepository';
import { ICardsRepository } from '../../repositories/ICardsRepository';

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<ICardsRepository>('CardsRepository', CardsRepository);
