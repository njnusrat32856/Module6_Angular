import { Component } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user!: UserModel;

  constructor(
    private userProService: ProfileService
  ) {}
   ngOnInit(): void {
     this.loadUserProfile();
   }

   loadUserProfile(): void {
    this.userProService.getUserProfile().subscribe({
      next: user => {
        if (user) {
          this.user = user;
        }
      },
      error: err => {

        console.error('Error Loading User Profile:', err)
      }
    });
   }

}
