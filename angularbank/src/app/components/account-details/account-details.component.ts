import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account.model';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.css'
})
export class AccountDetailsComponent implements OnInit {
  account: Account | undefined;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getAccountDetails();
  }

  getAccountDetails(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    if (accountNumber) {
      this.accountService.getAccountById(accountNumber).subscribe((data: Account) => {
        this.account = data;
      });
    }
  }
}
