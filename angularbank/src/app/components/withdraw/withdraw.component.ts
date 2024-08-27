import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../model/transaction.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  accountNumber: string = '';
  amount: number = 0;
  transactions: Transaction[] = [];
  
  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.accountNumber && this.amount > 0) {
      this.transactionService.withdraw(this.accountNumber, this.amount).subscribe(
        () => {
          alert('Withdrawal successful!');
          this.loadTransactionHistory();
        },
        (error) => {
          alert('Failed to process withdrawal. Please try again.');
        }
      );
    } else {
      alert('Please enter a valid account number and amount.');
    }
  }

  loadTransactionHistory(): void {
    this.transactionService.getTransactionHistory(this.accountNumber).subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        alert('Failed to load transaction history.');
      }
    );
  }
  
    // accountNumber: string = '';
    // amount: number = 0;
  
    // constructor(
    //   private transactionService: TransactionService,
    //   private router: Router
    // ) {}
  
    // onSubmit() {
    //   if (this.accountNumber && this.amount > 0) {
    //     this.transactionService.withdraw(this.accountNumber, this.amount).subscribe(
    //       (response) => {
    //         alert('Withdrawal successful!');
    //         this.router.navigate(['/transaction-history', this.accountNumber]);
    //       },
    //       (error) => {
    //         alert('Failed to process withdrawal. Please try again.');
    //       }
    //     );
    //   } else {
    //     alert('Please enter a valid account number and amount.');
    //   }
    // }
  

}
