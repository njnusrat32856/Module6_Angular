import { UserModel } from "./user.model";

export class Account {

    id!: string;
    aid!: string;
    accountNumber!: string;
    userName! : string;
    email!: string;
    address!: string;
    cell!: string;
    nid!: string;
    accountType!: string;
    currentBalance!: number;
    creatingDate!: Date;
    status!: boolean;
    users!: UserModel;
}