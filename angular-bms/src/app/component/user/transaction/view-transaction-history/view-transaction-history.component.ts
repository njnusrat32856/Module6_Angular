import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { Router } from '@angular/router';
import { TransactionModel } from '../../../../model/transaction.model';

@Component({
  selector: 'app-view-transaction-history',
  templateUrl: './view-transaction-history.component.html',
  styleUrl: './view-transaction-history.component.css'
})
export class ViewTransactionHistoryComponent implements OnInit{
  
  // transacHistory: any;

  // constructor(
  //   private transService: TransactionService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.transacHistory = this.transService.getTransactions();
  // }

  transactions: TransactionModel[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

}
