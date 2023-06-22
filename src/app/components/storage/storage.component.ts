import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Original } from '../../original.service';
import { MatCardModule } from '@angular/material/card';
import { CloudinaryModule } from '@cloudinary/ng'
import { Cloudinary } from '@cloudinary/url-gen'

@Component({
  selector: 'elw-storage',
  standalone: true,
  imports: [CommonModule, MatCardModule, CloudinaryModule],
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit{
  @Input() original: Original[] | null = null;
  cld: Cloudinary | undefined;
  ngOnInit() {
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'dwrrcohl5',
      },
    });
  }
}
