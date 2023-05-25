import { Routes } from '@angular/router';
import {ShopContainerComponent} from "./views/shop-container/shop-container.component";
import {ShopComponent} from "./components/shop/shop.component";
import {CartContainerComponent} from "./views/cart-container/cart-container.component";
import {ProductDetailContainerComponent} from "./views/product-detail-container/product-detail-container.component";

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'shop', loadComponent: () => import('./views/shop-container/shop-container.component').then((c => c.ShopContainerComponent))},
  { path: 'cart', component: CartContainerComponent},
  { path: 'product/:id', component: ProductDetailContainerComponent}
]
