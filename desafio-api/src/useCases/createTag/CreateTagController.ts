import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTagUseCase } from './CreateTagUseCase';
class CreateTagController {
  async handle(request: Request, response: Response) {
    const { nome } = request.body;
    const createTagUseCase = container.resolve(CreateTagUseCase);
    await createTagUseCase.execute({ nome });
    return response.status(201).send();
  }
}

export { CreateTagController };
