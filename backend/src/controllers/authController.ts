import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { PassportService } from "../services/PassportService";
import { variables } from "../config/variables";
import { User } from "../models/User";
import { Request, Response } from "express";

const googleStrategy = new Strategy({
    clientID: variables.google_client_id,
    clientSecret: variables.google_client_secret,
    callbackURL: 'http://localhost:5000/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    console.log("its works")
    const existingUser =  await User.findOne({googleId: profile.id});
    if (existingUser) {
        //
        done(null, existingUser);
    } else {
        const newUser =await new User({
            googleId: profile.id,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            email: profile.emails[0].value,
        }).save(); 
        done(null, newUser);
    }
});
const passportService = new PassportService(googleStrategy);
passportService.useStrategy();

passport.deserializeUser(async (id, done) => {
    const findUser = await User.findById(id);
    if (findUser) {
        done(null, findUser);
    }
});

passport.serializeUser((user, done) => {
    done(null, user);
});

export const googleAuthenticate = passport.authenticate( 'google',{
    scope: ['profile', 'email']
});

export const googleCallBack = passport.authenticate('google',{successRedirect:'http://localhost:3000?justloggedIn=5'});

export const me = (req: Request, res: Response) => {
    const {user} = req;
    console.log(user);
    res.json(user);
}

export const logout = (req: Request, res: Response, next: any) => {
    // req.logOut( function(err) {
    //     if (err) {
    //         // console.log(err)
    //         return next(err)
    //     };
    //     res.redirect("/");
    // });
    req.user = null;
    req.session = null;
    res.send(req.user);
}


