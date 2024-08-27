import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['role'] as string;
    const currentUser = this.authService.currentUserValue;

    if (currentUser && currentUser.role === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']);  // Redirect to unauthorized page
      return false;
    }
  }
}
