import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { ActivatedRoute } from '@angular/router'
import { Product, ShopService } from '../../shop.service'
import { MatListModule } from '@angular/material/list'
import { MatRadioModule } from '@angular/material/radio'
import { MatGridListModule } from '@angular/material/grid-list'

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule, MatRadioModule, MatGridListModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product: Product | null = null;

  constructor(private route: ActivatedRoute, private shopService: ShopService) { }

  addToCart(product: Product) {
    this.shopService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
