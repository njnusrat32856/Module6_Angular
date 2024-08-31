import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../model/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.css'
})
export class AccountFormComponent {

  account: Account = new Account();

  constructor(private accountService: AccountService,
    private router: Router
  ) {
    // this.account.id = this.generateUniqueId();
    this.account.accountNumber = this.accountService.generateAccountNumber();
    this.account.creatingDate = new Date();
    this.account.currentBalance = 0;
    this.account.status = false;
  }

  // generateUniqueId(): string {
  //   return Math.random().toString(36).substr(2, 4);
  // }

  onSubmit() {
    this.accountService.createAccount(this.account).subscribe({
      next: res => {
        console.log(res);
        
        this.router.navigate(['viewaccounts']);
      }
    });
  }

}
