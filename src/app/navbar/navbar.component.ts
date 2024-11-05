import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  user$: Observable<any>; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  constructor(private router: Router, private authService: AuthService) {
    this.user$ = this.authService.user$; // Subscribe to the user observable
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      this.router.navigate(['/']); 
    });
  }
}
