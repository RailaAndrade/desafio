import { Tag } from '../entities/Tag';
interface ICreateTagDTO {
  nome: string;
}
interface ITagsRepository {
  findByName(nome: string): Promise<Tag | undefined>;
  list(): Promise<Tag[]>;
  create({ nome }: ICreateTagDTO): Promise<void>;

  findById(id: string): Promise<Tag | undefined>;
  delete(id: string): Promise<void>;
  update(tag: Tag): Promise<Tag | undefined>;
}
export { ITagsRepository, ICreateTagDTO };
