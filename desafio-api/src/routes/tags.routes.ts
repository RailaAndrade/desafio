import { Router } from 'express';
import multer from 'multer';
import { CreateTagController } from '../useCases/createTag/CreateTagController';
import { DeleteTagController } from '../useCases/deleteTag/DeleteTagController';
import { ImportTagController } from '../useCases/importTag/ImportTagController';
import { ListTagsController } from '../useCases/listTags/ListTagsController';
import { UpdateTagController } from '../useCases/updateTag/UpdateTagController';

const tagsRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createTagController = new CreateTagController();
const importTagController = new ImportTagController();
const updateTagController = new UpdateTagController();
const listTagsController = new ListTagsController();

const deleteTagController = new DeleteTagController();

tagsRoutes.post('/', createTagController.handle);

tagsRoutes.get('/', listTagsController.handle);

tagsRoutes.delete('/:id', deleteTagController.handle);

tagsRoutes.patch('/:id', updateTagController.handle);

tagsRoutes.post('/import', upload.single('file'), importTagController.handle);

export { tagsRoutes };
