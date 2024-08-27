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
  loans: Loan | undefined;
  paymentAmount: number = 0;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loanService.getLoanById(id).subscribe({
        next: (data) => {
          this.loans = data;
        },
        error: (error) => {
          alert('Failed to load loan details.');
        }
      });
    }
  }

  onSubmit(): void {
    if (this.loans && this.paymentAmount > 0) {
      this.loanService.makePayment(this.loans.id, this.paymentAmount).subscribe({
        next: () => {
          alert('Payment successful!');
          this.router.navigate(['/loans']);
        },
        error: (error) => {
          alert('Failed to process payment. Please try again.');
        }
      });
    } else {
      alert('Please enter a valid payment amount.');
    }
  }
}
