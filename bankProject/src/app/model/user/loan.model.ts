

export class LoanModel {
    loanId !: number;
    loanType !: string;
    loanAmount !: number;
    loanStatus !: 'approved' | 'pending' | 'rejected';
    remainingAmount !: number;
    dueDate !: Date;
  }