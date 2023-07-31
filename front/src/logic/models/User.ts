export interface User {
    id: number,
    googleId: string,
    firstname: string,
    lastname: string,
    email: string,
    password?: string | null
}