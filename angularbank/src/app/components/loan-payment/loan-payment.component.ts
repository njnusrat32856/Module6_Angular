import { Component, OnInit } from '@angular/core';
import { Loan } from '../../model/loan.model';
import { LoanService } from '../../services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-payment',
  templateUrl: './loan-payment.component.html',
  styleUrl: './loan-payment.component.css'
})
export class LoanPaymentComponent implements OnInit {
  loan: Loan | undefined;
  paymentAmount: number = 0;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const loanId = this.route.snapshot.paramMap.get('loanId');
    if (loanId) {
      this.loanService.getLoanById(loanId).subscribe(
        (data) => {
          this.loan = data;
        },
        (error) => {
          alert('Failed to load loan details.');
        }
      );
    }
  }

  onSubmit(): void {
    if (this.loan && this.paymentAmount > 0) {
      this.loanService.makePayment(this.loan.accountNumber, this.paymentAmount).subscribe(
        () => {
          alert('Payment successful!');
          this.router.navigate(['/loans']);
        },
        (error) => {
          alert('Failed to process payment. Please try again.');
        }
      );
    } else {
      alert('Please enter a valid payment amount.');
    }
  }
}
