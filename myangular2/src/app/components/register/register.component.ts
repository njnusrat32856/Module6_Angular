import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // name: string = '';
  // email: string = '';
  // password: string = '';
  // role: string = 'user'; // Default role
  // errorMessage: string | null = null;

  regForm !: FormGroup;

  constructor(
    private userService: AuthService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.regForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
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


  // onSubmit(): void {
  //   this.userService.register(this.name, this.email, this.password, this.role).subscribe(
  //     (user) => {
  //       if (user) {
  //         alert('Registration successful! Please log in.');
  //         this.router.navigate(['/login']);
  //       } else {
  //         this.errorMessage = 'Registration failed. Please try again.';
  //       }
  //     },
  //     (error) => {
  //       this.errorMessage = 'An error occurred. Please try again.';
  //     }
  //   );
  // }

}
