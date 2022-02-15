import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCardUseCase } from './UpdateCardUseCase';

class UpdateCardController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { texto, tags } = request.body;
    const { id } = request.params;
    const updateCardUseCase = container.resolve(UpdateCardUseCase);
    const card = await updateCardUseCase.execute({ id, texto, tags });

    return response.status(200).json(card);
  }
}

export { UpdateCardController };
