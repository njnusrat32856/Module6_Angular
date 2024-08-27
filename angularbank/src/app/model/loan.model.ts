export class Loan {
    id!: string; 
    accountNumber!: string; 
    loanAmount!: number; 
    interestRate!: number; 
    durationInMonths!: number; // Duration of the loan in months
    startDate!: Date; // Date when the loan starts
    endDate!: Date; // Date when the loan is expected to be repaid
    monthlyPayment!: number; // Monthly payment amount
    balanceRemaining!: number; // Remaining balance to be paid
    status!: 'Pending' | 'Active' | 'Paid'; // Status of the loan
  }
  