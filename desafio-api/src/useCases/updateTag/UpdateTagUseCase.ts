import { inject, injectable } from 'tsyringe';
import { Tag } from '../../entities/Tag';
import { ITagsRepository } from '../../repositories/ITagsRepository';

interface IRequest {
  id: string;
  nome: string;
}

@injectable()
class UpdateTagUseCase {
  constructor(@inject('TagsRepository') private tagsRepository: ITagsRepository) {}

  async execute({ id, nome }: IRequest): Promise<Tag> {
    console.log(id, nome);
    const tag = await this.tagsRepository.findById(id);

    if (!tag) {
      throw new Error('Tag not found');
    }

    if (nome) {
      tag.nome = nome;
    }

    const nameAlreadyExists = await this.tagsRepository.findByName(nome);
    if (nameAlreadyExists) {
      throw new Error('Tag já existente');
    }

    await this.tagsRepository.update(tag);

    return tag;
  }
}

export { UpdateTagUseCase };
