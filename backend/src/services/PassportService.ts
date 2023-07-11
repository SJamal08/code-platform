// import { Strategy } from "passport-google-oauth20";
// import { Strategy } from "passport-local";
import passport, { Strategy } from "passport";

// const GoogleStrategy = new Strategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'http://localhost:5000/auth/google/callback'
// }, (accessToken, refreshToken, profile, done) => {
//     console.log(accessToken);
//     console.log(refreshToken);
//     console.log(profile);
// });

// passport.use(GoogleStrategy);

export class PassportService {
    strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    useStrategy() {
    passport.use(this.strategy);       
    }
}