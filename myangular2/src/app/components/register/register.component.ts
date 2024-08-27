import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  role: string = 'user'; // Default role
  errorMessage: string | null = null;

  constructor(private userService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.userService.register(this.name, this.email, this.password, this.role).subscribe(
      (user) => {
        if (user) {
          alert('Registration successful! Please log in.');
          this.router.navigate(['/login']);
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    );
  }

}
