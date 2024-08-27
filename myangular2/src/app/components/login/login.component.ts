import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (user) => {
        if (user) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid email or password.';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    );
  }
}
