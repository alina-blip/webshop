import { Component } from '@angular/core';
import { MainComponent } from './views/main/main.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ProductsContainerComponent } from './views/products-container/products-container.component';
import { RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/ng';

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
    CloudinaryModule,
  ],
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'webshop';
}
