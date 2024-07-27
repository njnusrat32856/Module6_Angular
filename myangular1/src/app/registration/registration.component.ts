import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  regForm !: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder

  ){
    this.regForm = this.formBuilder.group({
      
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void{
    if (this.regForm.valid) {
      const user: UserModel = this. regForm.value;
      this.authService.registration(user)
        .subscribe({
          next: res => {
            console.log('Registered Successfully:', res);
            this.authService.storeToken(res.token);
            this.router.navigate(['/'])
          },
          error: err => {
            console.error('Error registering user:', err);
          }
        });
    }
    else{
      alert("Complete Mandatory Field");
    }
  }


}
