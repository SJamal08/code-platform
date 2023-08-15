export interface User {
    _id: number | string,
    googleId: string,
    firstname: string,
    lastname: string,
    email: string,
    password?: string | null,
    isAdmin: boolean;
}