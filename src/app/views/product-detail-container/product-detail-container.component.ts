import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from "../../components/product-detail/product-detail.component";
import {Product} from "../../product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-detail-container',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.scss']
})
export class ProductDetailContainerComponent {
  // Product$: Observable<Product> | undefined ;
}
