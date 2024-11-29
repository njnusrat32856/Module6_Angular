import { Account } from "./account.model";

export interface Transaction {
    id: number; // Unique ID for the transaction
    amount: number; // The amount involved in the transaction
    transactionType: string; // Type of the transaction: Deposit, Withdrawal, Transfer
    account: Account; // The account associated with this transaction
    status: string; // Status of the transaction: Completed, Failed, Pending
    transactionDate: string; // Date of the transaction (in ISO date format)
    // initiatedBy: Employee | null; // Employee who initiated the transaction (if needed)
    // approvedBy: Admin | null; // Admin who approved the transaction (if needed)
    // customer: Customer | null; // The customer related to the transaction (nullable, if needed)
  }