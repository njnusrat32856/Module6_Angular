import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

    this.loginForm = this.formBuilder.group({
      name:[''],
      email: [''],
      password: ['']
    });
  }


  onSubmitReg(): void {
    if (this.loginForm.valid) {
      const user: UserModel = this.loginForm.value;
      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          // this.router.navigate(['/']); // Navigate to a protected route after registration

          alert('Successfully Sing in!');
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
    else{
      alert("Complte mandatory Field");
    }
  }



  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next: (res) => {
          console.log('User logged in successfully:', res);
          this.authService.storeToken(res.token);

          const role=this.authService.getUserRole();
          
            this.router.navigate(['/dashboard']);

          

           // Navigate to a protected route after login
        },
        error: (err) => {
          console.error('Error logging in:', err);
        }
      });
    }
  }
}
