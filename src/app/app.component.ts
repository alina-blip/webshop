import { Component } from '@angular/core';
import {MainComponent} from "./views/main/main.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {ShopContainerComponent} from "./views/shop-container/shop-container.component";
import { RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import {DBConfig, NgxIndexedDBModule} from 'ngx-indexed-db';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { FooterComponent } from './components/footer/footer.component'

const dbConfig: DBConfig = {
  name: "MyDb",
  version: 1,
  objectStoresMeta: [
    {
      store: "people",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "email", keypath: "email", options: { unique: false } }
      ]
    }
  ]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MainComponent, MatSlideToggleModule, MatButtonModule, ShopContainerComponent, RouterOutlet,
    RouterLinkWithHref, FooterComponent],
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  // constructor(private dbService: NgxIndexedDBService){
  // }
  title = 'webshop';


}
