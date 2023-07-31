import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";
import cookieSession, {  } from "cookie-session";
dotenv.config();
import {authRouter} from'./routes/authRoutes';
import { variables } from './config/variables';
import passport from 'passport';
import next from 'next/types';

const app: Express = express();


const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true
};
app.use(cors(options));

app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [variables.cookie_key]
  })
);

app.use(passport.initialize());
app.use(passport.session());

try {
    mongoose.connect(variables.mongo_uri)  
    console.log("success connection with db")
} catch (error) {
    console.log("big fail")
}


const port = process.env.PORT || 5000;

app.use("/auth", authRouter);

app.get("/hello", (req, res) => res.send("hello"));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});