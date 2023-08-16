import { Request, Response } from "express";
import { PassportAuthRepository } from "../repositories/AuthRepository/PassportAuthRepository";

const passportAuthRepository = new PassportAuthRepository();

export const googleAuthenticate = passportAuthRepository.loginWithGoogle()

export const googleCallBack = passportAuthRepository.googleCallback();

export const me = (req: Request, res: Response) => {
    const {user} = req;
    console.log(user);
    res.json(user);
}

export const logout = (req: Request, res: Response, next: any) => {
    req.user = null;
    req.session = null;
    res.send(req.user);
    console.log("logout done, req.user>>>", req.user)
}