import { Router } from 'express';

import PropertyController  from '../controllers/PropertyController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const propertyController = new PropertyController();

const router = Router();
//router.use(ensureAuthenticated);

router.get('/', propertyController.index);
router.post('/', propertyController.create);
router.get('/:id', propertyController.show);
router.put('/:id', propertyController.update);
router.delete('/:id', propertyController.delete);

export default router;
