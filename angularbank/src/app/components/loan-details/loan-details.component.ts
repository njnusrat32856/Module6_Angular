import { Component, OnInit } from '@angular/core';
import { Loan } from '../../model/loan.model';
import { LoanService } from '../../services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.css'
})
export class LoanDetailsComponent implements OnInit {
  
  // loan: Loan = new Loan();
  loan: Loan | undefined;
  // id : string= "";

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.loan = new Loan();
    // this.id = this.route.snapshot.params['id'];
    // this.loanService.getLoanById(this.id).subscribe({
    //   next: res => {
    //     this.loan =res;
    //     console.log(res);
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // })


    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loanService.getLoanById(id).subscribe({
        next: (data) => {
          this.loan = data;
        },
        error: (error) => {
          alert('Failed to load loan details.');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/loans']);
  }

}
