import { Request, Response, Router } from "express";
import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { PassportService } from "../services/PassportService";
import * as authController from "../controllers/authController";

export const authRouter = Router();

// const googleStrategy = new Strategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'http://localhost:5000/auth/google/callback'
// }, (accessToken, refreshToken, profile, done) => {
//     console.log(accessToken);
//     console.log(refreshToken);
//     console.log(profile);
// });
// const passportService = new PassportService(googleStrategy);

// passportService.useStrategy();


authRouter.get('/google/callback', authController.googleCallBack);

authRouter.get('/google', authController.googleAuthenticate);

module.exports = {authRouter };