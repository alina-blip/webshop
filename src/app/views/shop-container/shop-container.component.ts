import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopComponent} from "../../components/shop/shop.component";

@Component({
  selector: 'app-shop-container',
  standalone: true,
  imports: [CommonModule, ShopComponent],
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent {

}
