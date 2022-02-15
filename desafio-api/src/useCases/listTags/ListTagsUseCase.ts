import { inject, injectable } from 'tsyringe';
import { Tag } from '../../entities/Tag';
import { ITagsRepository } from '../../repositories/ITagsRepository';

@injectable()
class ListTagsUseCase {
  constructor(@inject('TagsRepository') private tagsRepository: ITagsRepository | null) {}
  async execute() {
    if (this.tagsRepository !== null) {
      const tags = await this.tagsRepository.list();
      return tags;
    }
  }
}

export { ListTagsUseCase };
