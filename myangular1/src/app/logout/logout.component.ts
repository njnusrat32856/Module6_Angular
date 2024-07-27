import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    // this.logout();
  }

  // logout(){

  //   this.authService.logout();
  //   this.router.navigate(['login']);
  // }

  // logout() {

  //   if (typeof localStorage !== 'undefined') {
  //     // Clear user session (e.g., remove token from localStorage)
  //     localStorage.removeItem('userToken');
  //   }
    
  //   // localStorage.removeItem('userToken');

    

  //   // Navigate to the login page after a delay
  //   setTimeout(() => {
  //     this.router.navigate(['/login']);
  //   }, 2000); // Adjust the delay as needed
  // }
}
