import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionService } from '../../../../services/transaction.service';
import { Router } from '@angular/router';
import { TransactionModel } from '../../../../model/transaction.model';

@Component({
  selector: 'app-fund-transfer-form',
  templateUrl: './fund-transfer-form.component.html',
  styleUrl: './fund-transfer-form.component.css'
})
export class FundTransferFormComponent {

  formValue!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private router: Router
  ) {
    this.formValue = this.formBuilder.group({
      fromAccountId: [''],
      toAccountId: [''],
      amount: [''],
      description: ['']
    });
  }

  transfer(): void {
    const newTransaction: TransactionModel = {
      id: 0,
      accountId: this.formValue.value.fromAccountId,
      type: 'Transfer',
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
