import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

// Firebase core imports
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// AngularFire imports for Firebase setup
import { provideFirebaseApp, initializeApp as angularFireInitApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcQkrwbhwejDq6AErdI9QcQpa42eqm_l0",
  authDomain: "angularecom-2a99e.firebaseapp.com",
  projectId: "angularecom-2a99e",
  storageBucket: "angularecom-2a99e.firebasestorage.app",
  messagingSenderId: "1009805325722",
  appId: "1:1009805325722:web:09032927fd4a6049113623"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideProtractorTestingSupport(),
    provideHttpClient(),
    // Firebase and AngularFire providers
    provideFirebaseApp(() => angularFireInitApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
