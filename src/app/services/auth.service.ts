import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Replace with your actual login logic

  constructor() {}

  login() {
    this.loggedIn = true; // Logic for logging in
  }

  logout() {
    this.loggedIn = false; // Logic for logging out
  }

  isLoggedIn(): boolean {
    return this.loggedIn; // Return the user's login status
  }
}
