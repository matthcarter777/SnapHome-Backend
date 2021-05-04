import { Router, Response } from 'express';

import UserController  from '../controllers/UsersController';

import usersRoute from './users.routes';
import sessionsRoute from './sessions.routes';
import propertyRoute from './property.routes';

const userController = new UserController();
const router = Router();

router.use('/login', sessionsRoute);
router.use('/users', usersRoute);
router.use('/propertys', propertyRoute);

router.post('/config', userController.config);

export default router;
