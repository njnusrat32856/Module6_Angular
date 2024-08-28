import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { map, Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      const expectedRole = route.data['role'] as Array<string>;
      const roles = this.authService.getUserRole();
  
      return this.authService.currentUser$.pipe(
        map (user =>{
          if (user && expectedRole.includes(roles)) {
            return true;
          } else {
            this.router.navigate(['login']);
            return false
          }
        })
      );
    }


  
}
