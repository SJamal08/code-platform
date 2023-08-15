interface IAuthRepository {
    login() : Promise<any>;
    loginWithGoogle(): Promise<any>;
    logout() : Promise<any>;
    me() : Promise<any>;
}