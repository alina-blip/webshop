import { Routes } from '@angular/router';
import {ShopContainerComponent} from "./views/shop-container/shop-container.component";
import {ShopComponent} from "./components/shop/shop.component";

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  // { path: 'shop', loadComponent: () => import('./views/shop-container/shop-container.component').then((c => c.ShopContainerComponent))},
  { path: 'shop', component: ShopContainerComponent},
  { path: 'test', component: ShopComponent}
]
