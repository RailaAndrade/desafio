import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCardUseCase } from './CreateCardUseCase';
class CreateCardController {
  async handle(request: Request, response: Response) {
    const { texto, tags } = request.body;
    const createCardUseCase = container.resolve(CreateCardUseCase);
    await createCardUseCase.execute({ texto, tags });
    return response.status(201).send();
  }
}

export { CreateCardController };
