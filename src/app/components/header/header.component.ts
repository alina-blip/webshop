import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { Cart, Product } from '../../shop.service'

@Component({
  selector: 'elw-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() items: Product[] = [];
  @Input() cart: Cart | undefined;

  isMobileMenuOpen = false;
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
