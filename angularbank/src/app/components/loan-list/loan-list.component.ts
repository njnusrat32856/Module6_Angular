import { Component, OnInit } from '@angular/core';
import { Loan } from '../../model/loan.model';
import { LoanService } from '../../services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css'
})
export class LoanListComponent implements OnInit {
  loans: Loan[] = [];
  accountNumber: string | null = null;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.accountNumber = params['accountNumber'];
  //     if (this.accountNumber) {
  //       this.loadLoans(this.accountNumber);
  //     }
  //   });
  // }

  ngOnInit(): void {
    // this.accountNumber = this.route.snapshot.paramMap.get('accountNumber');
    // if (this.accountNumber) {
    //   this.loadLoans(this.accountNumber);
    // }
    this.loadLoans();
  }

  loadLoans(): void {
    this.loanService.getAllLoans().subscribe((data) => {
      this.loans = data;
    })
  }


  // loadLoans(accountNumber: string): void {
  //   this.loanService.getAllLoans().subscribe((data) => {
  //     this.loans = data.filter(loan => loan.accountNumber === accountNumber);
  //   });
  // }

  viewLoanDetails(loanId: string): void {
    this.router.navigate(['/loandetails', loanId]);
  }

  makePayment(loanId: string): void {
    this.router.navigate(['/loanpayment', loanId]);
  }
}
