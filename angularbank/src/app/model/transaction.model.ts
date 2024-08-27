export class Transaction {
    tid!: string; 
    accountNumber!: string; 
    type!: 'Deposit' | 'Withdraw' | 'Transfer'; // Type of transaction
    amount!: number; 
    date!: Date; 
    description?: string; 
    targetAccountNumber?: string; 
  }
  