import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../../services/loan.service';
import { Loan } from '../../model/loan.model';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {

  loan: Loan = new Loan();

  constructor(
    private loanService: LoanService,
    private router: Router) {}

  onSubmit() {
    this.loan.startDate = new Date();
    this.loan.endDate = new Date(this.loan.startDate);
    this.loan.endDate.setMonth(this.loan.startDate.getMonth() + this.loan.durationInMonths);
    this.loan.balanceRemaining = this.loan.loanAmount;
    this.loan.status = 'Pending';
    this.loan.monthlyPayment = this.calculateMonthlyPayment();

    this.loanService.createLoan(this.loan).subscribe({
      next: () => {
        alert('Loan application submitted successfully!');
        this.router.navigate(['/loans', {accountNumber: this.loan.accountNumber}]);
      },
      error: (error) => {
        alert('Failed to submit loan application. Please try again.');
      }
  });
  }

  calculateMonthlyPayment(): number {
    const interestRateDecimal = this.loan.interestRate / 100;
    return (this.loan.loanAmount * interestRateDecimal) / this.loan.durationInMonths;
  }

}
