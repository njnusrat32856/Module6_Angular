import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../model/transaction.model';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.css'
})
export class FundTransferComponent {


  sourceAccountNumber: string = '';
  targetAccountNumber: string = '';
  amount: number = 0;
  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.sourceAccountNumber && this.targetAccountNumber && this.amount > 0) {
      this.transactionService.transfer(this.sourceAccountNumber, this.targetAccountNumber, this.amount).subscribe(
        () => {
          alert('Transfer successful!');
          this.loadTransactionHistory();
        },
        (error) => {
          alert('Failed to process transfer. Please try again.');
        }
      );
    } else {
      alert('Please enter valid account numbers and amount.');
    }
  }

  loadTransactionHistory(): void {
    this.transactionService.getTransactionHistory(this.sourceAccountNumber).subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        alert('Failed to load transaction history.');
      }
    );
  }

  // sourceAccountNumber: string = '';
  // targetAccountNumber: string = '';
  // amount: number = 0;

  // constructor(
  //   private transactionService: TransactionService,
  //   private router: Router
  // ) {}

  // onSubmit() {
  //   if (this.sourceAccountNumber && this.targetAccountNumber && this.amount > 0) {
  //     this.transactionService.transfer(this.sourceAccountNumber, this.targetAccountNumber, this.amount).subscribe(
  //       (response) => {
  //         alert('Transfer successful!');
  //         this.router.navigate(['/transaction-history', this.sourceAccountNumber]);
  //       },
  //       (error) => {
  //         alert('Failed to process transfer. Please try again.');
  //       }
  //     );
  //   } else {
  //     alert('Please enter valid account numbers and amount.');
  //   }
  // }

}
