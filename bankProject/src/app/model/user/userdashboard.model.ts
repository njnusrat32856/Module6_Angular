import { AccountModel } from "./account.model";
import { LoanModel } from "./loan.model";
import { TransactionModel } from "./transaction.model";


export class UserDashboard {
    totalBalance !: number;
    recentTransactions !: TransactionModel[];
    loanSummary !: LoanModel[];
    accountSummary !: AccountModel[];
  }