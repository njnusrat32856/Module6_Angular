import { TransactionModel } from "./transaction.model";

export class AccountModel {

    clientId !: number;


    username !: string;
    email !: string;
    balance !: number;
    transaction !: TransactionModel[];


    
    //     transactions !: {
    //             id : number;
    //             date : Date;
    //             // description : string;
    //             amount : number;
    //             type : string;
    // };
}