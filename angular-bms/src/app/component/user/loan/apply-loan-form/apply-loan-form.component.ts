import { Component, OnInit } from '@angular/core';
import { LoanModel } from '../../../../model/loan.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanService } from '../../../../services/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-loan-form',
  templateUrl: './apply-loan-form.component.html',
  styleUrl: './apply-loan-form.component.css'
})
export class ApplyLoanFormComponent implements OnInit {

  applyLoan: LoanModel = new LoanModel();
  formValue !: FormGroup;
  monthlyPayment!: any;
  // applyLoanData: any;

  constructor(
    private loanService: LoanService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      amount: [''],
      interestRate: [''],
      term: [''],
      // status: [''],
      monthlyPayment: [{ value: '', disabled: true }]
    });

    this.formValue.valueChanges.subscribe(() => {
      if (this.formValue.valid) {
        this.monthlyPayment = this.calculateMonthlyPayment();

      }
    });

  }

  calculateMonthlyPayment(): void {

    const interestRatePerMonth = this.formValue.value.interestRate / 100 / 12;
    const numberOfPayments = this.formValue.value.term;
    let monthlyPayment = (this.formValue.value.amount * interestRatePerMonth) /
      (1 - Math.pow(1 + interestRatePerMonth, -numberOfPayments));

    monthlyPayment = parseFloat(monthlyPayment.toFixed(2));

    this.formValue.patchValue({ monthlyPayment });

    console.log(monthlyPayment);




  }

  applyForLoan(): void {

    if (this.formValue.valid) {



      this.applyLoan.amount = this.formValue.value.amount;
      this.applyLoan.interestRate = this.formValue.value.interestRate;
      this.applyLoan.term = this.formValue.value.term;
      // this.applyLoan.status = this.formValue.value.status;
      this.applyLoan.monthlyPayment = this.formValue.value.monthlyPayment;

      console.log(this.applyLoan.monthlyPayment);



      this.loanService.applyForLoan(this.applyLoan)
        .subscribe({
          next: res => {
            console.log('Loan application submitted:', res);
            this.formValue.reset();
            this.router.navigate(['/loanAppCheck']);
          },
          error: (error) => {
            console.error('Error submitting loan application:', error);
          }
        });

    }


  }



}
