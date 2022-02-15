import { Router } from 'express';
import multer from 'multer';
import { CreateCardController } from '../useCases/createCard/CreateCardController';
import { DeleteCardController } from '../useCases/deleteCard/DeleteCardController';
import { ImportCardController } from '../useCases/importCard/ImportCardController';
import { ListCardsController } from '../useCases/listCards/ListCardsController';
import { UpdateCardController } from '../useCases/updateCard/UpdateCardController';

const cardsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createCardController = new CreateCardController();

const importCardController = new ImportCardController();

const listCardsController = new ListCardsController();

const deleteCardController = new DeleteCardController();

const updateCardController = new UpdateCardController();

cardsRoutes.get('/', listCardsController.handle);

cardsRoutes.post('/', createCardController.handle);

cardsRoutes.patch('/:id', updateCardController.handle);

cardsRoutes.delete('/:id', deleteCardController.handle);

cardsRoutes.post('/import', upload.single('file'), importCardController.handle);

export { cardsRoutes };
