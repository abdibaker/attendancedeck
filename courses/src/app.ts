import 'dotenv/config'
import express, {Express, Request, Response} from 'express';
import cookieSession from 'cookie-session'
import 'express-async-errors';
import {json} from 'body-parser';

import {errorHandler, NotFoundError} from '@abattendance/common';
import * as process from "process";

const app: Express = express();
app.set('trust proxy', true)
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
}))

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export {app}
