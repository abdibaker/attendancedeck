import express, { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

router.post(
  '/api/users/Signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage('Password must between 8 and 20'),
  ],
  (req: Request, res: Response) => {}
);

export { router as signinRouter };
