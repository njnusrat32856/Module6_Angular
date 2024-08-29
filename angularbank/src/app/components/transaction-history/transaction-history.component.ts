import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../model/transaction.model';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent implements OnInit {
  accountNumber!: string;
  transactions: Transaction[] = [];
  totalAmount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.accountNumber = this.route.snapshot.paramMap.get('accountNumber')!;
    // this.loadTransactionHistory();
    if (this.accountNumber) {
      // this.loadTransactions(this.accountNumber);
      this.loadTransactionsAndCalculateTotal(this.accountNumber);
    }

  }

  // loadTransactions(accountNumber: string): void {
  //   this.transactionService.getTransactionHistory(accountNumber).subscribe((data) => {
  //     this.transactions = data;
  //   });

  loadTransactionsAndCalculateTotal(accountNumber: string): void {
    this.transactionService.getTransactionHistory(accountNumber).subscribe({
      next: (data) => {
        this.transactions = data;
        this.calculateTotalAmount();
      },
      error: (error) => {
        alert('Failed to load transactions.');
      }
    });
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.transactions.reduce((total, transaction) => {
      if (transaction.type === 'Deposit') {
        return total + transaction.amount;
      } else if (transaction.type === 'Withdraw' || transaction.type === 'Transfer') {
        return total - transaction.amount;
      }
      return total;
    }, 0);
  }

  // loadTransactionHistory(): void {
  //   this.transactionService.getTransactionHistory(this.accountNumber).subscribe((data) => {
  //     this.transactions = data;
  //   });
  // }

  getTransactionTypeClass(type: string): string {
    switch (type) {
      case 'Deposit':
        return 'deposit';
      case 'Withdraw':
        return 'withdraw';
      case 'Transfer':
        return 'transfer';
      default:
        return '';
    }
  }
}