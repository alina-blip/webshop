import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { ShopService } from '../../shop.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { Observable } from 'rxjs'
import { Original, OriginalService } from '../../original.service'

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [CommonModule, ProductsComponent, FooterComponent],
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss'],
})
export class ProductsContainerComponent implements OnInit{
  original$: Observable<Original[]> | undefined;
  constructor(private originalService: OriginalService) {}
  getOriginals() {
    this.original$ = this.originalService.getOriginal();
  }
  ngOnInit() {
    this.getOriginals();
  }
}
