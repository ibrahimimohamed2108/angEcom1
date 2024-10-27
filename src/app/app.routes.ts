import { Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

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
    }
];
