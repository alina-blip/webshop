import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product} from "../../product";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  // @Input() Product: Product | null = null;

}
