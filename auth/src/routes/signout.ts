import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.post('/api/users/signout', (req: Request, res: Response) => {
  req.session = null;
  res.send({})
});

export { router as signOutRouter };
