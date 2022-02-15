import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteTagUseCase } from './DeleteTagUseCase';
class DeleteTagController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTagUseCase = container.resolve(DeleteTagUseCase);
    await deleteTagUseCase.execute(id);

    return response.status(200).send();
  }
}

export { DeleteTagController };
