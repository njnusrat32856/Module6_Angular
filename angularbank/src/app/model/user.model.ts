import { Account } from "./account.model";

export class UserModel {
    id !: string;
    firstName!: string;
    lastName!: string;
    gender!: string;
    // userName !: string;
    email !: string;
    password !: string;
    role !: string;
    accounts !: Account;
}