import { Role } from './role';

export class User {
    id?: Number;
    idstaff?: string;
    username?: string;
    password?: any;
    address?: string;
    phone?: string;
    born?: string;
    sex?: string;
    email?: string;
    link?: string;
    cmndfe?: string;
    cmndbe?: string;
    role?: Role;
    token?: string;
}
