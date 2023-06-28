import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { User } from '../../user.service';
import { Original } from '../../original.service'

@Component({
  selector: 'elw-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  @Output() addUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() user: User | null = null;
  registrationControl = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    housenumber: new FormControl('', [Validators.required]),
    postalcode: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submitEmit() {
    this.addUser.emit(this.registrationControl.value as User);
    console.log(this.registrationControl.value);
  }
}