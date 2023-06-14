import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Original } from '../../original.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'elw-storage',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent {
  @Input() original: Original[] | null = null;
}
