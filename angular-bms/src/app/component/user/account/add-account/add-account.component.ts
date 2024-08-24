import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css'
})
export class AddAccountComponent {

  formValue!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accService: AccountService,
    private router: Router
  ) {
    this.formValue = this.formBuilder.group({
      userId: ['', Validators.required],
      accountNumber: ['', Validators.required],
      balance: [0, Validators.required]
    });
  }

  addAccount(): void {
    if (this.formValue.valid) {
      this.accService.addAccount(this.formValue.value).subscribe({
        next: () => {
          console.log('Account added successfully');
          this.router.navigate(['/viewAccounts']);
        },
        error: (error) => console.error('Error adding account', error)
      });
    }
  }

}
