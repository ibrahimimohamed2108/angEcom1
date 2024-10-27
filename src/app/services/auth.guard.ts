import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Import your authentication service

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    if (this.authService.isLoggedIn()) {
      return true; // Allow access if user is logged in
    } else {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false;
    }
  }
}
