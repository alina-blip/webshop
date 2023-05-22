import { Component } from '@angular/core';
import {MainComponent} from "./views/main/main.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {ShopContainerComponent} from "./views/shop-container/shop-container.component";
import { RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MainComponent, MatSlideToggleModule, MatButtonModule, ShopContainerComponent,  RouterOutlet,
    RouterLinkWithHref,],
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'webshop';
}
