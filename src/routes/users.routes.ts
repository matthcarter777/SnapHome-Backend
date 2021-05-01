import { Router } from 'express';

import UserController  from '../controllers/UsersController';
import EnsureAuthenticated from '../middlewares/ensureAuthenticated';

const userController = new UserController();

const router = Router();

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
