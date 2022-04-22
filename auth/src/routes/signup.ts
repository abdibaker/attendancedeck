import express, { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';

const router: Router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage('Password must between 8 and 20'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new Error('Invalid email or password');
    }

    console.log('creating a new user...');
    throw new Error('Database is down');
    res.send({});
  }
);

export { router as signupRouter };
