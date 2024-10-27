import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  constructor(private router: Router) {}

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
  
}