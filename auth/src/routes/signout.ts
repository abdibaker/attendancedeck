import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.post('/api/users/signout', (req: Request, res: Response) => {});

export { router as signoutRouter };
