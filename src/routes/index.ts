import { Router } from 'express';

import usersRoute from './users.routes';
import sessionsRoute from './sessions.routes';
import propertyRoute from './property.routes';

const router = Router();

router.use('/login', sessionsRoute);
router.use('/users', usersRoute);
router.use('/propertys', propertyRoute);

export default router;
