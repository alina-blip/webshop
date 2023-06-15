import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Original } from '../../original.service'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'elw-products',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, MatCardModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() original: Original[] | null= null;
}
