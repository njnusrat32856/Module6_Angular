import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.css'
})
export class ViewAccountComponent implements OnInit{

  accounts : any;

  constructor(
    private accService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accounts = this.accService.getAccounts();
  }

}
