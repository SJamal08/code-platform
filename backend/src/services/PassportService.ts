import passport, { Strategy } from "passport";

export class PassportService {
    strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    useStrategy() {
    passport.use(this.strategy);       
    }
}