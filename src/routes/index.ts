import { Router } from 'express';

import usersRoute from './users.routes';
import sessionsRoute from './sessions.routes';

const router = Router();

router.use('/login', sessionsRoute);
router.use('/users', usersRoute);

export default router;
