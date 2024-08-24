import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../../services/account.service';
import { AccountModel } from '../../../../model/account.model';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrl: './update-account.component.css'
})
export class UpdateAccountComponent implements OnInit{

  account: AccountModel = new AccountModel();

  // formValue!: FormGroup;
  id: string = "";

  constructor(
    private route: ActivatedRoute,
    // private formBuilder: FormBuilder,
    private accService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.account = new AccountModel();
    this.id = this.route.snapshot.params['id'];
    this.accService.getAccountById(this.id)
      .subscribe({
        next: res => {
          this.account = res;
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  updateAccount(){
    this.accService.updateAccount(this.id, this.account)
      .subscribe({
        next: res => {
          this.router.navigate(['viewaccount']);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  // ngOnInit(): void {
  //   this.accountId = +this.route.snapshot.paramMap.get('id')!;
  //   this.loadAccountData();
  // }

  // loadAccountData(): void {
  //   this.accService.getAccountById(this.accountId).subscribe({
  //     next: (data) => {
  //       this.formValue = this.formBuilder.group({
  //         userId: [data.userId, Validators.required],
  //         accountNumber: [data.accountNumber, Validators.required],
  //         balance: [data.balance, Validators.required]
  //       });
  //     },
  //     error: (error) => console.error('Error loading account', error)
  //   });
  // }

  // updateAccount(): void {
  //   if (this.formValue.valid) {
  //     const updatedAccount: AccountModel = {
  //       id: this.accountId,
  //       ...this.formValue.value
  //     };
  //     this.accService.updateAccount(updatedAccount).subscribe({
  //       next: () => {
  //         console.log('Account updated successfully');
  //         this.router.navigate(['/viewAccounts']);
  //       },
  //       error: (error) => console.error('Error updating account', error)
  //     });
  //   }
  // }
}
