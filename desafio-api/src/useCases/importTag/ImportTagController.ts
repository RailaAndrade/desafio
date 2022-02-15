import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportTagUseCase } from './ImportTagUseCase';

class ImportTagController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    const importTagUseCase = container.resolve(ImportTagUseCase);
    if (file) {
      await importTagUseCase.execute(file);
    }
    return response.send();
  }
}

export { ImportTagController };
