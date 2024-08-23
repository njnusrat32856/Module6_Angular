import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../../../model/user/account.model';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.css'
})
export class ViewAccountComponent implements OnInit {
  // account!: AccountModel;
  accounts : any;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accounts = this.accountService.getAccounts();

    // const accountId = +this.route.snapshot.paramMap.get('id')!;
    // this.loadAccount(accountId);
  }


  // loadAccount(accountId: number): void {
  //   this.accountService.getAccounts().subscribe(account => {
  //     this.account = account;
  //   });
  // }
}
