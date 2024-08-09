import { Component } from '@angular/core';
import { AccountModel } from '../../model/account.model';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css'
})
export class SideNavigationComponent {

  account!: AccountModel;

  constructor() { }

  ngOnInit(): void {
    // Initialize the account object here, or fetch it from a service
    this.account = new  AccountModel();{ 
      username: ['']
      email: ['']
    };
  }
}
