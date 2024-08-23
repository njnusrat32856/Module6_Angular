export class LoanModel {
    id !: number;
    userId !: number;
    amount !: number;
    interestRate !: number;
    term !: number;
    status !: 'Pending' | 'Approved' | 'Rejected';
    monthlyPayment !: number;
  }
  