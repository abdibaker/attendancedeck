import express, { Express, Request, Response } from 'express';
// import 'express-async-errors';
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

app.all('*', (req: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listen on port 3000!');
});
