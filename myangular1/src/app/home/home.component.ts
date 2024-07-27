import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(
    private authService: AuthService,
    private router: Router,
    //  private logout: LogoutComponent
  ){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.logout();
  }

  // public logout(){

  //   this.authService.logout();
  //   this.router.navigate(['login']);
  // }

  // public logout() {
  //   this.router.navigate(['/login']);
  // }

  logout() {

    if (typeof localStorage !== 'undefined') {
      // Clear user session (e.g., remove token from localStorage)
      localStorage.removeItem('userToken');
    }
    
    // localStorage.removeItem('userToken');

    

    // Navigate to the login page after a delay
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 20000); // Adjust the delay as needed
  }
}
