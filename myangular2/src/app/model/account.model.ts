import { TransactionModel } from "./transaction.model";

export class AccountModel {

    clientId !: number;
    username !: string;
    email !: string;
    balance !: number;
    accountNumber !: number;
    transactions !: TransactionModel[];
}