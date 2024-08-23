import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../../model/user/account.model';
import { FormGroup } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent implements OnInit{
  
  newAccount: AccountModel = new AccountModel();

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.onCreateAccount();
  }

  onCreateAccount(): void {
    this.accountService.createAccount(this.newAccount).subscribe(account => {
      this.router.navigate(['/account']);  // Navigate to account list or another view after creation
    });
  }



}
