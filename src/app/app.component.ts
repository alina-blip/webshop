import { Component } from '@angular/core';
import {MainComponent} from "./views/main/main.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [MainComponent, MatSlideToggleModule, MatButtonModule],
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'webshop';
}
