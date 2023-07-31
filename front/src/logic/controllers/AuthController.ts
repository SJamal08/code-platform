import { AuthRepository } from "../repositories/authRepository/authRepository";

class AuthController {
    private authRepository: AuthRepository;

    constructor(){
        this.authRepository = new AuthRepository();
    }

    async loginWithGoogle() {
        console.log("login in controller")
        await this.authRepository.loginWithGoogle();
        // return success;
    }

    async me() {
        const user = await this.authRepository.me();
        return user;
    }

    async logout() {
        const user = await this.authRepository.logout();
        return user;
    }
}

export {AuthController}