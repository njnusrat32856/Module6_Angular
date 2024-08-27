import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { Transaction } from '../../model/transaction.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {


  accountNumber: string = '';
  amount: number = 0;
  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.accountNumber && this.amount > 0) {
      this.transactionService.deposit(this.accountNumber, this.amount).subscribe({
        next: () => {
          alert('Deposit successful!');
          this.loadTransactionHistory();
        },
        error: (error) => {
          alert('Failed to process deposit. Please try again.');
        }
      });
    } else {
      alert('Please enter a valid account number and amount.');
    }
  }

  loadTransactionHistory(): void {
    this.transactionService.getTransactionHistory(this.accountNumber).subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (error) => {
        alert('Failed to load transaction history.');
      }
    });
  }

  // accountNumber: string = '';
  // amount: number = 0;

  // constructor(
  //   private transactionService: TransactionService

  // ) { }

  // onSubmit() {
  //   if (this.accountNumber && this.amount > 0) {
  //     this.transactionService.deposit(this.accountNumber, this.amount).subscribe({
  //       next: (response) => {
  //         alert('Deposit successful!');
  //         this.accountNumber = '';
  //         this.amount = 0;

  //       },
  //       error: (error) => {
  //         alert('Failed to process deposit. Please try again.');
  //       }
  //     });
  //   } else {
  //     alert('Please enter a valid account number and amount.');
  //   }
  // }

}
