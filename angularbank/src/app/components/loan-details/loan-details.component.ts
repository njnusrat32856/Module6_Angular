import { Component, OnInit } from '@angular/core';
import { Loan } from '../../model/loan.model';
import { LoanService } from '../../services/loan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.css'
})
export class LoanDetailsComponent implements OnInit {
  loan: Loan | undefined;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    if (accountNumber) {
      this.loanService.getLoanById(accountNumber).subscribe({
        next: (data) => {
          this.loan = data;
        },
        error: (error) => {
          alert('Failed to load loan details.');
        }
      });
    }
  }
}
