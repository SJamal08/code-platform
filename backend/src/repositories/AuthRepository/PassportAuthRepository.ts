import { Strategy } from "passport-google-oauth20";
import { variables } from "../../config/variables";
import { User } from "../../models/User";
import passport from "passport";
import { IAuthRepository } from "./IAuthRepository";

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
            isAdmin: profile.emails[0].value === variables.admin_email ? true: false,
        }).save(); 
        done(null, newUser);
    }
});
passport.use(googleStrategy); 

passport.deserializeUser(async (id, done) => {
    const findUser = await User.findById(id);
    done(null, findUser);
});

passport.serializeUser((user, done) => {
    done(null, user);
});

export class PassportAuthRepository implements IAuthRepository {

    constructor() {}
    loginWithGoogle(): any {
        return passport.authenticate('google', {
            scope: ['profile', 'email']
        });
    }
    login(): any {
        throw new Error("Method not implemented.");
    }
    logout(): any {
        throw new Error("Method not implemented.");
    }
    me(): any {
        throw new Error("Method not implemented.");
    }  

    googleCallback(): any {
        return passport.authenticate('google',{successRedirect:'http://localhost:3000?justloggedIn=5'});
    }
}