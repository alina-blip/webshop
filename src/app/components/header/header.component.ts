import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { Location } from '@angular/common';


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
  constructor(private location: Location) {}

  reloadPage(): void {
    const currentUrl = this.location.path();
    if (currentUrl === '/products') {
      this.location.replaceState(currentUrl);
      window.location.reload();

}
  }
}
