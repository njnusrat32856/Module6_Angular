import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.logout();
    // throw new Error('Method not implemented.');
  }


  logout() {
    this.authService.logout();
    this.authService.removeUserDetails();
    this.router.navigate(['login']);
  }

}
