import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../components/contact/contact.component'

@Component({
  selector: 'elw-contact-container',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.scss']
})
export class ContactContainerComponent {

}
