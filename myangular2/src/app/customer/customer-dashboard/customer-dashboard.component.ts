import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountModel } from '../../model/account.model';
import { TransactionModel } from '../../model/transaction.model';
import { Router } from '@angular/router';
import { TansactionService } from '../../services/tansaction.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent implements OnInit{


  accounts : any;
  transactions: TransactionModel[] = [];

  constructor(
    private accountService: AccountService,
    private transactionService: TansactionService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.accounts = this.accountService.getAccountInfo();
    

    // this.loadData();
    this.accounts = this.accountService.getAccountBalance();
    // this.accounts = this.accountService.getAccountInfo();

    // this.accountService.getAccountInfo().subscribe((account) => {
    //   this.account = account;
    // });
  }
  // loadData(): void {
  //   forkJoin({
  //     transactions: this.transactionService.getTransactionForAccount(),
  //     accounts: this.accountService.getAccountInfo()
  //   }).subscribe({
  //     next: ({ transactions, accounts }) => {
  //       this.transactions = transactions;
  //       this.accounts = accounts;
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });
  // }

  
  
  
  
  
  
  
  onViewTransactions(): void {
    // Navigate to transaction list page
  }

  onFundTransfer(): void {
    // Navigate to fund transfer page
  }

  onAccountSettings(): void {
    // Navigate to account settings page
  }
}
