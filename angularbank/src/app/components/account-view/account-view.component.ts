import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../model/account.model';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';
import { Transaction } from '../../model/transaction.model';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent implements OnInit {

  user!: UserModel | null;
  account!: Account | null;
  transactions: Transaction[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private accountService: AccountService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    if (this.user) {
      this.loadUserAccount(this.user.id);
    }
  }

  loadUserAccount(userId: string): void {
    this.accountService.getAccountsByUser(userId).subscribe({
      next: (accounts) => {
        if (accounts && accounts.length > 0) {
          this.account = accounts[0];  
          this.loadTransactionHistory(this.account.accountNumber);
        } else {
          this.account = null;
        }
      },
      error: (error) => {
        console.error('Failed to load account', error);
        this.account = null;
      }
    });
  }

  loadTransactionHistory(accountNumber: string): void {
    this.transactionService.getTransactionHistory(accountNumber).subscribe({
      next: (transactions) => {
        this.transactions = transactions;
        this.calculateCurrentBalance();
      },
      error: (error) => {
        console.error('Failed to load transaction history', error);
      }
    });
  }

  calculateCurrentBalance(): void {
    if (this.account) {
      this.account.currentBalance = this.transactions.reduce((total, transaction) => {
        if (transaction.type === 'Deposit') {
          return total + transaction.amount;
        } else if (transaction.type === 'Withdraw' || transaction.type === 'Transfer') {
          return total - transaction.amount;
        }
        return total;
        
        
        // return total - transaction.amount;
      }, 0);
    }
  }

  // accounts: Account[] = [];

  // constructor(
  //   private accountService: AccountService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.loadAccounts();
  //   // this.accountService.getAccounts().subscribe((data) => {
  //   //   this.accounts = data;
  //   // });
  // }

  // loadAccounts(): void {
  //   this.accountService.getAccounts().subscribe((data: Account[]) => {
  //     this.accounts = data;
  //   });
  // }



  viewTransactions(accountNumber: string): void {
    this.router.navigate(['/transHistory', accountNumber]);
  }

}
