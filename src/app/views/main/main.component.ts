import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Cart, ShopService } from '../../shop.service'

@Component({
  selector: 'elw-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private shopService: ShopService) {}
  get cart(): Cart {
    return this.shopService.cart;
  }
}
