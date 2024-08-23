import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../../model/user/account.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent implements OnInit{
  
  newAccount: AccountModel = new AccountModel();
  formValue !: FormGroup;
  accountData : any;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      
    });
  }

  onCreateAccount(): void {
    this.accountService.createAccount(this.newAccount).subscribe(account => {
      this.router.navigate(['/account']);  // Navigate to account list or another view after creation
    });
  }



}
