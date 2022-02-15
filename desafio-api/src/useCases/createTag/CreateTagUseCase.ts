import { inject, injectable } from 'tsyringe';
import { ITagsRepository } from '../../repositories/ITagsRepository';

interface IRequest {
  nome: string;
}

@injectable()
class CreateTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute({ nome }: IRequest) {
    const tagAlreadyExists = await this.tagsRepository.findByName(nome);
    if (tagAlreadyExists) {
      throw new Error('Tag existente');
    }
    this.tagsRepository.create({ nome });
  }
}

export { CreateTagUseCase };
