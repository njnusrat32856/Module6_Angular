import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({

      email: ['', Validators.email],
      
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials)
        .subscribe({
          next: res => {
            console.log('User Login Successfully:', res);
            this.authService.storeToken(res.token);
            this.router.navigate(['dahboard']);
          },
          error: err => {
            console.error('Error registering user:', err);
          }
        });
    }

  }

  // onSubmit(): void {
  //   this.authService.login(this.email, this.password).subscribe(
  //     (response) => {
  //       console.log(response);
  //       // Redirect to dashboard or other protected route
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }
}