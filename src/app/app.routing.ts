import { Routes } from '@angular/router';
import { CartContainerComponent } from './views/cart-container/cart-container.component';
import { ProductDetailContainerComponent } from './views/product-detail-container/product-detail-container.component';
import { AboutContainerComponent } from './views/about-container/about-container.component';
import { WorksContainerComponent } from './views/works-container/works-container.component';
import { LoginContainerComponent } from './views/login-container/login-container.component';
import { StorageContainerComponent } from './views/storage-container/storage-container.component';
import { ContactContainerComponent } from './views/contact-container/contact-container.component'
import { FaqContainerComponent } from './views/faq-container/faq-container.component'

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
  { path: 'product/:id', component: ProductDetailContainerComponent },
  { path: 'about', component: AboutContainerComponent },
  { path: 'works', component: WorksContainerComponent },
  { path: 'login', component: LoginContainerComponent },
  { path: 'upload', component: StorageContainerComponent },
  { path: 'contact', component: ContactContainerComponent },
  { path: 'faqs', component: FaqContainerComponent }

];
