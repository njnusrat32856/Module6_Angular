import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../../../services/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-loan-approval-check',
  templateUrl: './view-loan-approval-check.component.html',
  styleUrl: './view-loan-approval-check.component.css'
})
export class ViewLoanApprovalCheckComponent implements OnInit{
  
  loanAppCheck: any;

  constructor(
    private loanService: LoanService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.loanAppCheck = this.loanService.getLoans();
  }

}
