import { LoanModel } from "../user/loan.model";
import { TransactionModel } from "../user/transaction.model";

export class AdminDashboard {
    totalUsers !: number;
    totalLoans !: number;
    totalDeposits !: number;
    recentTransactions !: TransactionModel[];
    loanApprovalSummary !: LoanModel[];
    
  }