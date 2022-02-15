import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCardsUseCase } from './ListCardsUseCase';

class ListCardsController {
  async handle(request: Request, response: Response) {
    const listCardsUseCase = container.resolve(ListCardsUseCase);
    const all = await listCardsUseCase.execute();
    return response.json(all);
  }
}
export { ListCardsController };
