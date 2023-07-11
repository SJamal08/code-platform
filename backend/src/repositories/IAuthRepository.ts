interface IAuthRepository {
    login() : Promise<any>;
    logout() : Promise<any>;
    me() : Promise<any>;
}