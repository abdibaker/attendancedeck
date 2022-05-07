import express, {Express, Request, Response} from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session'
import 'express-async-errors';
// @ts-ignore
import {json} from 'body-parser';

import {signupRouter} from './routes/signup';
import {signoutRouter} from './routes/signout';
import {signinRouter} from './routes/signin';
import {currentUserRouter} from './routes/current-user';
import {NotFoundError} from './errors/not-found-error';
import {errorHandler} from './middlewares/error-hadler';

const app: Express = express();
app.set('trust proxy', true)
app.use(json());
app.use(cookieSession({
  signed: false,
  // secure: true,
}))

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const startDb = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined')
  }
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@attendancedeck.o2mg0.mongodb.net/user?retryWrites=true&w=majority`
    );
  } catch (err) {
    console.error(err);
  }
  app.listen(process.env.PORT || 3000, () => {
    console.log('Listen on port 3000!');
  });
};

startDb();
