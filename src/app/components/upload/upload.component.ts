import { Component, EventEmitter, Output } from '@angular/core';
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

@Component({
  selector: 'elw-upload',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  @Output() addToDatabase: EventEmitter<Original> =
    new EventEmitter<Original>();
  originalControl = new FormGroup({
    id: new FormControl(1, [Validators.required]),
    title: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    material: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    image_data: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.addToDatabase.emit(this.originalControl.value as Original);
    console.log(this.originalControl.value);
  }
}
