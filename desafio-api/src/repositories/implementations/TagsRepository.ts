import { getRepository, Repository } from 'typeorm';
import { Tag } from '../../entities/Tag';

import { ICreateTagDTO, ITagsRepository } from '../ITagsRepository';

class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async create({ nome }: ICreateTagDTO) {
    const tag = this.repository.create({
      nome,
    });
    await this.repository.save(tag);
  }

  async list(): Promise<Tag[]> {
    const tags = await this.repository.find();
    return tags;
  }

  async findByName(nome: string): Promise<Tag | undefined> {
    const tag = await this.repository.findOne({ nome });

    return tag;
  }
  async findById(id: string): Promise<Tag | undefined> {
    const tag = await this.repository.findOne({ id });

    return tag;
  }

  async delete(id: any) {
    await this.repository.delete({ id });
  }
  async update(tag: Tag): Promise<Tag | undefined> {
    if (tag) {
      await this.repository.save(tag);
      return tag;
    }
  }
}

export { TagsRepository };
