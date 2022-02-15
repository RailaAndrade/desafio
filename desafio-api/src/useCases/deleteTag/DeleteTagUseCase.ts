import { inject, injectable } from 'tsyringe';
import { ITagsRepository } from '../../repositories/ITagsRepository';

@injectable()
class DeleteTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute(id: string) {
    this.tagsRepository.delete(id);
  }
}

export { DeleteTagUseCase };
