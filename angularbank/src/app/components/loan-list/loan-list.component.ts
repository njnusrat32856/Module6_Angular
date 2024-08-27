import { Component, OnInit } from '@angular/core';
import { Loan } from '../../model/loan.model';
import { LoanService } from '../../services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css'
})
export class LoanListComponent implements OnInit {
  loans: Loan[] = [];
  // accountNumber: string | null = null;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.accountNumber = params['accountNumber'];
  //     if (this.accountNumber) {
  //       this.loadLoans(this.accountNumber);
  //     }
  //   });
  // }

  ngOnInit(): void {

    this.loadLoans();
  }

  loadLoans(): void {
    this.loanService.getAllLoans().subscribe({
      next: (data) => {
        this.loans = data;
      },
      error: (error) => {
        alert('Failed to load loan history.');
      }
    });
  }


  // loadLoans(accountNumber: string): void {
  //   this.loanService.getAllLoans().subscribe((data) => {
  //     this.loans = data.filter(loan => loan.accountNumber === accountNumber);
  //   });
  // }

  viewLoanDetails(id: string): void {
    this.router.navigate(['/loandetails', id]);
  }

  makePayment(id: string) {
    this.router.navigate(['/loanpayment', id]);
  }
}
