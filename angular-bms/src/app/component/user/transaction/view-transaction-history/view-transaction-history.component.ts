import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-transaction-history',
  templateUrl: './view-transaction-history.component.html',
  styleUrl: './view-transaction-history.component.css'
})
export class ViewTransactionHistoryComponent implements OnInit{
  
  transacHistory: any;

  constructor(
    private transService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transacHistory = this.transService.getTransactions();
  }

}
