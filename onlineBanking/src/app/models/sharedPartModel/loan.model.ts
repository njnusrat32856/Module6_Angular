import { Customer } from "../customerPartModel/customer.model";
import { Employee } from "../employee.model";

export interface Loan {
    id: number;
    loanAmount: number; // The total loan amount
    interestRate: number; // Interest rate on the loan
    durationInMonths: number; // Duration of the loan in months
    balanceRemaining: number; // The remaining balance to be paid on the loan
    customerId: Customer; // The customer who took the loan
    approvedBy: Employee; // The employee who approved the loan
    status: string; // The status of the loan, e.g., "Approved", "Pending", "Rejected"
  }