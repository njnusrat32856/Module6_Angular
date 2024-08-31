import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;


  constructor(
    private userService: AuthService,
    private router: Router,
    private builder: FormBuilder
  ) {
    
    this.loginForm = this.builder.group({
      email: [''],
      password: ['']
    });
  }



  onSubmit(): void {
    
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.userService.login(credentials).subscribe({
        next: res => {
          console.log('User Logged in Successfully:', res);

          this.userService.storeToken(res.token);
          const role = this.userService.getUserRole();
          this.router.navigate(['profile']);
        },
        error: err => {
          console.error('Error logging in:', err)
        }
      });
    }
  }

}
