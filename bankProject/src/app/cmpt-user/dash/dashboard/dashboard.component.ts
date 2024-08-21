import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../model/user/user.model';
import { AccountModel } from '../../../model/user/account.model';
import { UserService } from '../../../services/user.service';
import { TransactionModel } from '../../../model/user/transaction.model';
import { LoanModel } from '../../../model/user/loan.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  users : any;
  selectedAccount!: AccountModel | null;
  transactions: TransactionModel[] = [];
  loans: LoanModel[] = [];
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.userService.getUserData().subscribe(data => {
      this.users = data;
      this.transactions = this.transactions;
      this.loans = this.users.loans;
    });
  }

  onSelectAccount(account: AccountModel): void {
    this.selectedAccount = account;
  }

  onApplyForLoan(loanType: string, amount: number): void {
    
  }

  onFundTransfer(targetAccountId: number, amount: number): void {
    
  }

}