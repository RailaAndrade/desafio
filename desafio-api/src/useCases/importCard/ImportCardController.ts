import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCardUseCase } from './ImportCardUseCase';

class ImportCardController {
  async handle(request: Request, response: Response) {
    const { file } = request;

    const importCardUseCase = container.resolve(ImportCardUseCase);
    if (file) {
      await importCardUseCase.execute(file);
    }
    return response.send();
  }
}

export { ImportCardController };
