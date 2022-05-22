import express, { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import {validateRequest, BadRequestError} from "@abattendance/common";
import {User} from "../models/user";
import {PasswordManager} from "../services/password-manager";
import jwt from "jsonwebtoken";

const router: Router = express.Router();

router.post(
  '/api/users/login',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must provide a password'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {email, password} = req.body;

    const existingUser = await User.findOne({email});
    if (!existingUser){
      throw new BadRequestError('Invalid Credential')
    }
     const passwordMatch = await PasswordManager.compare(existingUser.password, password);
    if (!passwordMatch){
      throw new BadRequestError('Invalid Credential')
    }
    const userJwt = jwt.sign({
      id: existingUser.id,
      email: existingUser.email
    }, process.env.JWT_KEY!)

    req.session = {
      jwt: userJwt
    };

    res.status(200).send(existingUser);
  }
);

export { router as loginRouter };
