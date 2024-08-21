import { AccountModel } from "../user/account.model";
import { LoanModel } from "../user/loan.model";
import { TransactionModel } from "../user/transaction.model";
import { Statement } from "./statement.model";


export class CustomerView {
    id !: number;
    name !: string;
    email !: string;
    phoneNumber !: string;
    accounts !: AccountModel[];
    loans !: LoanModel[];
    transactions !: TransactionModel[];
    statement !: Statement[];
  }