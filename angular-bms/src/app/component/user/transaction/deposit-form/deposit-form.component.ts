import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { Router } from '@angular/router';
import { TransactionModel } from '../../../../model/transaction.model';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrl: './deposit-form.component.css'
})
export class DepositFormComponent {

  formValue!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private router: Router
  ) {
    this.formValue = this.formBuilder.group({
      accountId: [''],
      amount: [''],
      description: ['']
    });
  }

  deposit(): void {
    const newTransaction: TransactionModel = {
      id: 0,
      accountId: this.formValue.value.accountId,
      type: 'Deposit',
      amount: this.formValue.value.amount,
      date: new Date().toISOString(),
      description: this.formValue.value.description
    };

    this.transactionService.addTransaction(newTransaction).subscribe(() => {
      this.formValue.reset();
      this.router.navigate(['/transHistory']);
    });
  }

}
