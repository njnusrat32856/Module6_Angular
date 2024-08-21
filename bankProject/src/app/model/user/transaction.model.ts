

export class TransactionModel {
    transactionId !: number;
    type !: 'deposit' | 'withdraw' | 'transfer';
    amount !: number;
    date !: Date;
    accountId !: number;
    targetAccountId?: number;
  }