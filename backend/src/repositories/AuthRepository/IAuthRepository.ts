export interface IAuthRepository {
    login() : any;
    loginWithGoogle(): any;
    logout() : any;
    me() : any;
}