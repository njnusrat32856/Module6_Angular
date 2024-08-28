import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm !: FormGroup;

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
       this.userService.login(credentials).subscribe ({
         next: res => {
          console.log('User Logged in Successfully:', res);

          this.userService.storeToken(res.token);
          const role = this.userService.getUserRole();
          this.router.navigate(['userProfile']);
         },
          error: err => {
            console.error('Error logging in:', err);
          }
       });
    }

  }


  // email: string = '';
  // password: string = '';
  // errorMessage: string | null = null;

  // constructor(private authService: AuthService, private router: Router) {}

  // onSubmit(): void {
  //   this.authService.login(this.email, this.password).subscribe(
  //     (user) => {
  //       if (user) {
  //         this.router.navigate(['/dashboard']);
  //       } else {
  //         this.errorMessage = 'Invalid email or password.';
  //       }
  //     },
  //     (error) => {
  //       this.errorMessage = 'An error occurred. Please try again.';
  //     }
  //   );
  // }
}
