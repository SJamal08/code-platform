import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import {authRouter} from'./routes/authRoutes';

const app: Express = express();


const port = process.env.PORT || 5000;

app.use("/auth", authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});