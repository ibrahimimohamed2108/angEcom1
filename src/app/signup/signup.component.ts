import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  errorMessage:string |null = null;
  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    terms: [false, Validators.requiredTrue]
  });

  constructor(private router: Router) {}

  onSubmit(): void {
    console.log('Form submitted', this.form.value);
    if (this.form.invalid) {
      console.log('Form is invalid', this.form.errors);
      return;
    }

    const { email, username, password } = this.form.value;
    
    if (email && username && password) {
      this.authService.register(email, username, password).subscribe({
        next: () => {
          console.log('Registration successful');
          this.router.navigateByUrl('/');
        },
        error: (error) => {
        //console.error('Registration failed:', error);
        this.errorMessage = error.code;
        }

      });
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}