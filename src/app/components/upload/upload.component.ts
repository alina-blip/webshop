import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Original } from '../../original.service';
import { MatInputModule } from '@angular/material/input';
import { CloudinaryModule } from '@cloudinary/ng';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'elw-upload',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    CloudinaryModule,
    MatSnackBarModule,
  ],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  @Output() addToDatabase: EventEmitter<Original> =
    new EventEmitter<Original>();
  @Input() origin: Original | null = null;
  originalControl = new FormGroup({
    title: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    material: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required])
  });

  img!: CloudinaryImage;
  myWidget: any;

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dwrrcohl5',
      },
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    this.img = cld.image('');
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(350));
    const script = document.createElement('script');
    script.src = 'https://upload-widget.cloudinary.com/global/all.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      this.initializeWidget();
    };
  }
  initializeWidget() {
    const cloudinary = (window as any).cloudinary;
    if (cloudinary) {
      this.myWidget = cloudinary.createUploadWidget(
        {
          cloudName: 'dwrrcohl5',
          uploadPreset: 'm2theira',
        },
        (error: any, result: any) => {
          if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info);
            console.log(result.info.url);
            const formFields = structuredClone(this.originalControl.value);
            formFields['url'] = result.info.url;
            this.addToDatabase.emit(formFields as Original);
            console.log(formFields);
            const uploadedImage = document.getElementById('uploadedimage');
            if (uploadedImage) {
              uploadedImage.setAttribute('src', result.info.secure_url);
            }
          }
        }
      );
    }
  }
  openWidget() {
    this.myWidget.open();
  }
}
