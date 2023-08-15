import { Router } from "express";
import * as authController from "../controllers/authController";
import passport from "passport";

const authRouter = Router();
// authRouter.use(passport.initialize());
// authRouter.use(passport.session());

authRouter.get('/google/callback', authController.googleCallBack);

authRouter.get('/google', authController.googleAuthenticate);

authRouter.get('/me', authController.me);

authRouter.get('/logout', authController.logout);

export default authRouter