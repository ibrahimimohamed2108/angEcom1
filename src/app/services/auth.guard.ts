import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Adjust the import path as needed';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      map(user => {
        if (user) {
          return true; // User is authenticated, allow access
        } else {
          this.router.navigate(['/login']); // Redirect to login if not authenticated
          return false; // Prevent access
        }
      })
    );
  }
}
