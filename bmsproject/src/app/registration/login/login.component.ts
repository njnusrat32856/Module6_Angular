import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  // loginObj: any = {
  //   "email": "",
  //   "password": ""
  // };
  // private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  // onLogin() {
  //   debugger;
  //   this.http.post(
  //     this.baseUrl, this.loginObj).subscribe((res: any) => {
  //       if (res.result) {
  //         alert('login Success');
  //         localStorage.setItem('login Token', res.data.token);
  //         this.router.navigateByUrl('/dashboard');
  //       } else {
  //         alert(res.message);
  //       }

  //       // next: (res) => {
  //       //   console.log('User logged in successfully:', res);
  //       //   this.authService.storeToken(res.token);
  //       //   this.router.navigate(['userprofile']); // Navigate to a protected route after login
  //       // },
  //       // error: (err) => {
  //       //   console.error('Error logging in:', err);
  //       // }
  //     });
  // }



  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          console.log('User logged in successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['dashboard']); // Navigate to a protected route after login
        },
        error: (err) => {
          console.error('Error logging in:', err);
        }
      });
    }
  }



}
