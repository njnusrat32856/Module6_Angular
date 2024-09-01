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
  ) { }

  ngOnInit(): void {
    // this.accountService.getAccounts().subscribe((data) => {
    //   this.accounts = data;
    // });

    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccounts().subscribe(
      (data) => {
        this.accounts = data;
      },
      (error) => {
        console.error('Failed to load accounts', error);
      }
    );
  }

  

  approveAccount(account: Account): void {
    account.status = true;  
    this.accountService.updateAccount(account).subscribe({
      next: (updatedAccount) => {
        console.log('Account approved:', updatedAccount);
        this.loadAccounts();  
      },
      error: (error) => {
        console.error('Failed to approve account', error);
      }
    });
  }
}
