export interface IRegister{
    username: string;
    email: string;
    password: string;
}

export interface IUserRegistered{
    username: string,
    email: string,
    password: string,
    id: string,
    createdAT: string,
}