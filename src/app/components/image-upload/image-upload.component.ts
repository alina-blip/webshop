import { Component, EventEmitter, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FileUploadModule } from 'ng2-file-upload'
import { Cloudinary } from '@cloudinary/url-gen'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'elw-image-upload',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FileUploadModule,
    ReactiveFormsModule,
  ],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  // @Output() fileSelected: EventEmitter<FormData> = new EventEmitter();
  // onFileSelected(files: FileList): void {
  //   const formData = new FormData();
  //   formData.append('image', files[0]);
  //   this.fileSelected.emit(formData);
  // }
}




