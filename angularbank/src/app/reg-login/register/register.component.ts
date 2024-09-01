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

      firstName: [''],
      lastName: [''],
      gender: [''],
      email: [''],
      password: [''],
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
      this.userService.registration(user).subscribe({
        next: res => {
          alert('User Registered Successfully');
          console.log('User Registered Successfully: ', res);
          this.userService.storeToken(res.token);
          // const role = this.userService.getUserRole();
          this.router.navigate(['/login']);
        },
        error: err => {
          console.error('Error Registering User: ', err);

        }
      });
    }
    else {
      alert('Complete mandatory Field');
    }
  }

}
