import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { Router } from '@angular/router';
import { TransactionModel } from '../../../../model/transaction.model';

@Component({
  selector: 'app-withdraw-form',
  templateUrl: './withdraw-form.component.html',
  styleUrl: './withdraw-form.component.css'
})
export class WithdrawFormComponent {

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

  withdraw(): void {
    const newTransaction: TransactionModel = {
      id: 0,
      accountId: this.formValue.value.accountId,
      type: 'Withdraw',
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
