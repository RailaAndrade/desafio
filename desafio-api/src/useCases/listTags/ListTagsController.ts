import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTagsUseCase } from './ListTagsUseCase';

class ListTagsController {
  async handle(request: Request, response: Response) {
    const listTagUseCase = container.resolve(ListTagsUseCase);
    const all = await listTagUseCase.execute();
    return response.json(all);
  }
}
export { ListTagsController };
