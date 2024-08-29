import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  regForm !: FormGroup;
  // loginForm!: FormGroup;

  constructor(
    private userService: AuthService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.regForm = this.builder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(9)]],
      role: ['user']
    });
    // this.loginForm = this.builder.group({
    //   email: [''],
    //   password: ['']
    // });
  }

  onSubmit(): void {
    if (this.regForm.valid) {
      const user: UserModel = this.regForm.value;
      this.userService. registration(user).subscribe({
        next: res => {
          alert('User Registered Successfully');
          console.log('User Registered Successfully: ', res);
          this.userService.storeToken(res.token);
          this.router.navigate(['/login']);
        },
        error: err => {
          console.error('Error Registering User: ', err);

        }
      });
    }
    else {
      alert('Complte mandatory Field');
    }
  }

  // onLoinSubmit(): void {
    
  //   if (this.loginForm.valid) {
  //     const credentials = this.loginForm.value;
  //     this.userService.login(credentials).subscribe({
  //       next: res => {
  //         console.log('User Logged in Successfully:', res);

  //         this.userService.storeToken(res.token);
  //         const role = this.userService.getUserRole();
  //         this.router.navigate(['profile']);
  //       },
  //       error: err => {
  //         console.error('Error logging in:', err)
  //       }
  //     });
  //   }
  // }

}
