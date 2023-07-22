import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'elw-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    firstname: new FormControl('', Validators['required']),
    lastname: new FormControl('', Validators['required']),
    email: new FormControl('', Validators['required']),
    message: new FormControl('', Validators['required']),
  });

  submit() {
  }
}
