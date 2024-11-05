import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  errorMessage:string |null = null;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    rememberMe: [false]
  });

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('Form is invalid', this.form.errors);
      return;
    }

    const { email, password } = this.form.value;
    
    if (email && password) {
      this.authService.login(email, password).subscribe({
        next: () => {
          console.log('Login successful');
          this.router.navigateByUrl('/');
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.errorMessage=error.code;
        }
      });
    }
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}