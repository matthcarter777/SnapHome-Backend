import { Router } from 'express';

import UserController  from '../controllers/UsersController';

const userController = new UserController();

const router = Router();

router.get('/', userController.index);
router.post('/', userController.create);

export default router;