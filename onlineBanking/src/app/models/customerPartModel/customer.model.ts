import { Account } from "../sharedPartModel/account.model";
import { Loan } from "../sharedPartModel/loan.model";

export interface Customer {
    id: number;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    accounts: Account[];
    loans: Loan[];
    notifications: Notification[];
  }