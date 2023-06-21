import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { Original } from '../../original.service';
import { MatCardModule } from '@angular/material/card';
import { CloudinaryModule } from '@cloudinary/ng'
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'

@Component({
  selector: 'elw-storage',
  standalone: true,
  imports: [CommonModule, MatCardModule, CloudinaryModule],
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
})
export class StorageComponent implements OnInit{
  @Input() original: Original[] | null = null;
  @Input() publicID: string | undefined;

  img!: CloudinaryImage;

  ngOnInit () {


    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dwrrcohl5',
      },
    });
    // // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.

      this.img = cld.image(this.publicID);
      this.img.resize(fill().width(250).height(350));

    // // Resize to 250 x 250 pixels using the 'fill' crop mode.

    // if (this.original){
    //
    // this.original.forEach((originalItem) => {
    //   const img = cld.image(originalItem.publicID);
    //   img.resize(fill().width(250).height(350));
    //
    //   // Assign the CloudinaryImage object to the respective original item
    //   originalItem.img = img;
  }


}
