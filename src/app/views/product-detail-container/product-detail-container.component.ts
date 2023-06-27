import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../../components/product-detail/product-detail.component';
import { Product, ShopService } from '../../shop.service'
import { Observable, switchMap } from 'rxjs'
import { Original, OriginalService } from '../../original.service';
import { ActivatedRoute } from '@angular/router';
import { FilterComponent } from '../../components/filter/filter.component'

@Component({
  selector: 'elw-product-detail-container',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent, FilterComponent],
  templateUrl: './product-detail-container.component.html',
  styleUrls: ['./product-detail-container.component.scss'],
})
export class ProductDetailContainerComponent implements OnInit {
  product$: Observable<Product> | undefined;
  original$: Observable<Original> | undefined;

  constructor(
    private shopService: ShopService,
    private originalService: OriginalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.original$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.originalService.getOriginalById(Number(params.get('id')));
      })
    );
  }
  addToCart(original: Original) {
    this.shopService.addToCart(original);
    this.shopService.saveCart();
    this.shopService.calculateTotal();
  }
}
