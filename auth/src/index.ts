import express, { Express, Request, Response } from 'express';
import { json } from 'body-parser';

import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { signinRouter } from './routes/signin';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-hadle';

const app: Express = express();
app.use(json());

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Listen on port 3000!');
});
