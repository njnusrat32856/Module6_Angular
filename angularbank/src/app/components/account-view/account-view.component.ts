import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../model/account.model';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent implements OnInit{

  user!: UserModel | null;
  account!: Account | null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
    if (this.user) {
      this.loadUserAccount(this.user.id);
    }
  }

  loadUserAccount(userId: string): void {
    this.accountService.getAccountsByUser(userId).subscribe({
      next:(accounts) => {
        if (accounts && accounts.length > 0) {
          this.account = accounts[0];  // Assuming the user has only one account
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
