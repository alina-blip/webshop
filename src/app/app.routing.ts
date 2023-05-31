import { Routes } from '@angular/router';
import {ProductsContainerComponent} from "./views/products-container/products-container.component";
import {ProductsComponent} from "./components/products/products.component";
import {CartContainerComponent} from "./views/cart-container/cart-container.component";
import {ProductDetailContainerComponent} from "./views/product-detail-container/product-detail-container.component";

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'products', loadComponent: () => import('./views/products-container/products-container.component').then((c => c.ProductsContainerComponent))},
  { path: 'cart', component: CartContainerComponent},
  { path: 'product', component: ProductDetailContainerComponent}
]
