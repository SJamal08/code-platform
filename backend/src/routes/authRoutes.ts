import { Router } from "express";
import * as authController from "../controllers/authController";

const authRouter = Router();

authRouter.get('/google/callback', authController.googleCallBack);

authRouter.get('/google',authController.googleAuthenticate);

authRouter.get('/me', authController.me);

authRouter.get('/logout', authController.logout);

export default authRouter