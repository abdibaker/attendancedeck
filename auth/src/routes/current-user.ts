import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  res.status(201).send({ message: 'ok' });
});

export { router as currentUserRouter };
