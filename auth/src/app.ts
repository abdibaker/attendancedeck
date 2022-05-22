import 'dotenv/config'
import express, {Express} from 'express';
import cookieSession from 'cookie-session'
import 'express-async-errors';
import {json} from 'body-parser';

import {signupRouter} from './routes/signup';
import {signOutRouter} from './routes/signout';
import {loginRouter} from './routes/login';
import {currentUserRouter} from './routes/current-user';
import {errorHandler, NotFoundError} from '@abattendance/common';
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

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export {app}
