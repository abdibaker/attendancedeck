import 'dotenv/config'
import express, {Express, Request, Response} from 'express';
import cookieSession from 'cookie-session'
import 'express-async-errors';
// @ts-ignore
import {json} from 'body-parser';

import {signupRouter} from './routes/signup';
import {signOutRouter} from './routes/signout';
import {loginRouter} from './routes/login';
import {currentUserRouter} from './routes/current-user';
import {NotFoundError} from './errors/not-found-error';
import {errorHandler} from './middlewares/error-hadler';
import * as process from "process";

const app: Express = express();
app.set('trust proxy', true)
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
}))

app.use(signupRouter);
app.use(loginRouter);
app.use(signOutRouter);
app.use(currentUserRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export {app}
