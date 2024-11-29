import { Customer } from "../customerPartModel/customer.model";
import { Branch } from "./branch.model";
import { Transaction } from "./transaction.model";

export interface Account {
    id: number;
    accountNumber: string; // Unique account number (e.g., "ACC123456")
    balance: number; // Account balance
    accountType: string; // E.g., "Savings", "Checking"
    branch: Branch; // Branch where the account is held
    customerId: Customer; // Customer who owns the account
    transactions: Transaction[]; // List of transactions associated with this account
  }
  