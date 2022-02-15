import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateTagUseCase } from './UpdateTagUseCase';

class UpdateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome } = request.body;
    const { id } = request.params;
    const updateTagUseCase = container.resolve(UpdateTagUseCase);
    const tag = await updateTagUseCase.execute({ id, nome });

    return response.status(200).json(tag);
  }
}

export { UpdateTagController };
