import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../model/transaction.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAllTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  getTransactionTypeClass(type: string): string {
    switch (type) {
      case 'Deposit':
        return 'Deposit';
      case 'Withdraw':
        return 'Withdraw';
      case 'Transfer':
        return 'Transfer';
      default:
        return '';
    }
  }
}
