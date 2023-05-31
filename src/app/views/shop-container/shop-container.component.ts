import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopComponent} from "../../components/shop/shop.component";
import {Observable} from "rxjs";
import {ProductDetailContainerComponent} from "../product-detail-container/product-detail-container.component";
import {Product} from "../../product";
import {ShopService} from "../../shop.service";
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-shop-container',
  standalone: true,
  imports: [CommonModule, ShopComponent, FooterComponent],
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent implements OnInit {
 // Product$: Observable<Product> | undefined;
constructor(private shopService: ShopService) {
}
 ngOnInit() {
 }


}
