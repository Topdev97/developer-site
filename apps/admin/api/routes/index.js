import express from 'express';

import projectsRouter from './projects.router.js';
import usersRouter from './users.router.js';
import authRouter from './auth.router.js'
export default function routerApi(app) {
  const router = express.Router();
  app.use('/v1', router);
  router.use('/projects', projectsRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}
;
