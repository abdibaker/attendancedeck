import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import 'express-async-errors';
import { json } from 'body-parser';

import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { signinRouter } from './routes/signin';
import { currentUserRouter } from './routes/current-user';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middlewares/error-hadler';

const app: Express = express();
app.use(json());

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);

app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const startDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://abdibaker:Heroally1@attendancedeck.o2mg0.mongodb.net/user?retryWrites=true&w=majority'
    );
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log('Listen on port 3000!');
  });
};

startDb();
