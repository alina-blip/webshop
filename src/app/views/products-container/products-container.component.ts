import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { ShopService } from '../../shop.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [CommonModule, ProductsComponent, FooterComponent],
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent {
  constructor(private shopService: ShopService) {}
}
