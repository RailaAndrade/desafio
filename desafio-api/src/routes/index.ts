import { Router } from 'express';
import { tagsRoutes } from './tags.routes';

import { cardsRoutes } from './cards.routes';

const router = Router();
router.use('/tags', tagsRoutes);

router.use('/cards', cardsRoutes);

export { router };
