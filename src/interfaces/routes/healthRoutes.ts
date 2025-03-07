import { Router } from 'express';

export const createHealthRouter = () => {
  const router = Router();

  router.get('/', (_, res) => {
    res.status(200).json({ status: 'ok' });
  });

  return router;
};
