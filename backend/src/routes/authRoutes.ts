import { Request, Response, Router } from "express";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { PassportService } from "../services/PassportService";
import * as authController from "../controllers/authController";

export const authRouter = Router();

authRouter.get('/google/callback', authController.googleCallBack);

authRouter.get('/google', authController.googleAuthenticate);

authRouter.get('/me', authController.me);

authRouter.get('/logout', authController.logout);

module.exports = {authRouter };