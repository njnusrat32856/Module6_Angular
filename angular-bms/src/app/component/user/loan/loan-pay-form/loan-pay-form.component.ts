import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../../../../services/loan.service';

@Component({
  selector: 'app-loan-pay-form',
  templateUrl: './loan-pay-form.component.html',
  styleUrl: './loan-pay-form.component.css'
})
export class LoanPayFormComponent implements OnInit{

  formValue!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loanService: LoanService
  ) {}


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      loanId: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  payLoan(): void {
    if (this.formValue.valid) {
      const loanId = this.formValue.value.loanId;
      const payment = this.formValue.value.payment;

      this.loanService.payLoan(loanId, payment).subscribe(() => {
        console.log('Payment successful');
      });
    }
  }
}
