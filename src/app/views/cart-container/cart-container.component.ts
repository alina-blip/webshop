import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "../../components/cart/cart.component";

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CommonModule, CartComponent],
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent {

}
