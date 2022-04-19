import express, { Express, Request, Response } from 'express';
import { json } from 'body-parser';

const app: Express = express();
app.use(json());

app.get('/  ', (req: Request, res: Response) => {
  res.status(400).send('OK');
});

app.listen(3000, () => {
  console.log('Listen on port 3000!');
});
