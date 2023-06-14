import { Component, EventEmitter, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {Input} from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


}
