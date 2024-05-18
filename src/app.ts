import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// const port = 3000;

//parser

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
///Users/rubel/Documents/WEB-DEVELOPMENT-LEVEL-2/MILESTON-2/first-project
