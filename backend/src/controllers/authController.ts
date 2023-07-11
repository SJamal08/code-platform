import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { PassportService } from "../services/PassportService";

const googleStrategy = new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
});
const passportService = new PassportService(googleStrategy);

passportService.useStrategy();


export const googleAuthenticate = passport.authenticate( 'google',{
    scope: ['profile', 'email']
});

export const googleCallBack = passport.authenticate('google');


