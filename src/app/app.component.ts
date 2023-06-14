import { Component } from '@angular/core';
import { MainComponent } from './views/main/main.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ProductsContainerComponent } from './views/products-container/products-container.component';
import { RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { DBConfig } from 'ngx-indexed-db';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// const dbConfig: DBConfig = {
//   name: "MyDb",
//   version: 1,
//   objectStoresMeta: [
//     {
//       store: "people",
//       storeConfig: { keyPath: "id", autoIncrement: true },
//       storeSchema: [
//         { name: "name", keypath: "name", options: { unique: false } },
//         { name: "email", keypath: "email", options: { unique: false } }
//       ]
//     }
//   ]
// };

@Component({
  selector: 'elw-root',
  templateUrl: './app.component.html',
  imports: [
    MainComponent,
    MatSlideToggleModule,
    MatButtonModule,
    ProductsContainerComponent,
    RouterOutlet,
    RouterLinkWithHref,
    FooterComponent,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'webshop';
}
