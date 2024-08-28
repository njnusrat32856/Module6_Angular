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

  constructor(
    private userService: AuthService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.regForm = this.builder.group({
      userName: ['', Validators.required],
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

}
