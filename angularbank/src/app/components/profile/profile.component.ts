import { Component } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { ProfileService } from '../../services/profile.service';
import { Account } from '../../model/account.model';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userRole: string | null = '';
  user!: UserModel;
  account !: Account;
  accounts: Account[] = [];

  constructor(
    private profileService: ProfileService,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
    this.loadAccountDetails();
  }

  loadUserProfile(): void {
    this.profileService.getUserProfile().subscribe({
      next: user => {
        if (user) {
          this.user = user;
          this.userRole = user?.role || null;
          
        }
      },
      error: err => {
        console.error('Error Loading User Profile:', err);
      }
    });
  }
  loadAccountDetails(): void {
    this.accountService.getAccounts().subscribe(
      data => {
        if (data) {
          this.accounts = data;
        }
      }
    )
  }
  viewTransactions(accountNumber: string): void {
    this.router.navigate(['/transHistory', accountNumber]);
  }
}
