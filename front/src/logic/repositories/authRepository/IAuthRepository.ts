import { User } from "../../models/User"

interface IAuthRepository {
    loginWithGoogle(): Promise<Boolean | null>

    me(): Promise<User | null | undefined>

    // registerWithGoogle(): Promise<Boolean | null>
    logout(): Promise<User | null>
}

export type {IAuthRepository}