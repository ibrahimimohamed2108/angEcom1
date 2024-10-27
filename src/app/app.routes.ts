import { Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home Page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Product Details'
    },
    {
      path: 'cart',
      component: CartComponent,
      title: 'Your Cart'
    },
    {
    path: 'login',
    component: LoginComponent,
    title: 'login' 
    },
    {
    path: 'signup',
    component: SignupComponent,
    title: 'signup' 
    },
    { path: '**', 
      redirectTo: '' 
    } 

];
