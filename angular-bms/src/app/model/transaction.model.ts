export class TransactionModel {
    id !: number;
    accountId !: number;
    type !: 'Deposit' | 'Withdraw' | 'Transfer';
    amount !: number;
    date !: string;
    description !: string;
}
