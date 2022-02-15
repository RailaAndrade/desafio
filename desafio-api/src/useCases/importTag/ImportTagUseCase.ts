import { parse } from 'csv-parse';
import fs from 'fs';
import { injectable, inject } from 'tsyringe';
import { ITagsRepository } from '../../repositories/ITagsRepository';

interface IImportTag {
  nome: string;
}

@injectable()
class ImportTagUseCase {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  loadTags(file: Express.Multer.File): Promise<IImportTag[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const tags: IImportTag[] = [];
      const parseFile = parse();
      stream.pipe(parseFile);
      parseFile
        .on('data', async (line) => {
          const [nome] = line;
          tags.push({
            nome,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(tags);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const tags = await this.loadTags(file);

    tags.map(async (tag) => {
      const { nome } = tag;

      const existsTag = await this.tagsRepository.findByName(nome);
      if (!existsTag) {
        await this.tagsRepository.create({
          nome,
        });
      }
    });
  }
}

export { ImportTagUseCase };
