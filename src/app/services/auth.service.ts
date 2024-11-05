import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserCredential,signOut,onAuthStateChanged  } from '@angular/fire/auth';
import { BehaviorSubject, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);
  //private
  userSubject = new BehaviorSubject<any>(null); // Use BehaviorSubject to track the user's auth state
  currentUser: any;

  constructor() {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      this.userSubject.next(user); // Update the subject when the auth state changes
    });
  }

  get user$(): Observable<any> {
    return this.userSubject.asObservable(); // Expose the user observable
  }
  register (
    email: string,
    username: string,
    password: string,
  ):
  Observable<void> {

    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password,
    ).then((response) =>
    updateProfile(response.user,{displayName:username}),
);
  return from(promise);
  }
  

  login(email: string, password: string): Observable<UserCredential> {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((response) => {
        console.log("Login successful");
        return response; // Return the response for additional usage if needed
      });

    return from(promise); // Return Observable<UserCredential> here
  }

  signOut(): Observable<void> {
    const promise = signOut(this.firebaseAuth)
      .then(() => {
        console.log("Sign out successful");
      });
    return from(promise);
  }

  
}
