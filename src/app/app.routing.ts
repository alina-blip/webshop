import { Routes } from '@angular/router';
import { CartContainerComponent } from './views/cart-container/cart-container.component';
import { ProductDetailContainerComponent } from './views/product-detail-container/product-detail-container.component';
import { AboutContainerComponent } from './views/about-container/about-container.component';
import { WorksContainerComponent } from './views/works-container/works-container.component';
import { AdminContainerComponent } from './views/admin-container/admin-container.component';
import { StorageContainerComponent } from './views/storage-container/storage-container.component';

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: 'products',
    loadComponent: () =>
      import('./views/products-container/products-container.component').then(
        (c) => c.ProductsContainerComponent
      ),
  },
  { path: 'cart', component: CartContainerComponent },
  { path: 'product', component: ProductDetailContainerComponent },
  { path: 'about', component: AboutContainerComponent },
  { path: 'works', component: WorksContainerComponent },
  { path: 'admin', component: AdminContainerComponent },
  { path: 'upload', component: StorageContainerComponent },
];
