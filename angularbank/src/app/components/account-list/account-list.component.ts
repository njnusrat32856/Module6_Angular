import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account.model';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((data) => {
      this.accounts = data;
    });
  }

  getStatusClass(status: boolean): string {
    return status ? 'active' : 'inactive';
  }

  viewTransactions(accountNumber: string): void {
    this.router.navigate(['/transHistory', accountNumber]);
  }
  approveAccount(account: Account): void {
    account.status = true;
    this.accountService.updateAccount(account).subscribe();
  }
}