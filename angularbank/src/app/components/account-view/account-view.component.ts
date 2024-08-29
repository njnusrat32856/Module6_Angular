import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../model/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent implements OnInit{

  accounts: Account[] = [];

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAccounts();
    // this.accountService.getAccounts().subscribe((data) => {
    //   this.accounts = data;
    // });
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe((data: Account[]) => {
      this.accounts = data;
    });
  }

  approveAccount(account: Account): void {
    account.status = true;
    this.accountService.updateAccount(account).subscribe();
  }

  viewTransactions(accountNumber: string): void {
    this.router.navigate(['/transHistory', accountNumber]);
  }
  
}
