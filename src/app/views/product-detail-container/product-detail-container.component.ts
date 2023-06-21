import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from "../../components/product-detail/product-detail.component";
import { ShopService } from '../../shop.service'

@Component({
  selector: 'elw-product-detail-container',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.scss']
})
export class ProductDetailContainerComponent {
  // Product$: Observable<Product> | undefined;

  constructor(private shopService: ShopService) {}
}
