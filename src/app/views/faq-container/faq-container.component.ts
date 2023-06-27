import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from '../../components/faq/faq.component'

@Component({
  selector: 'elw-faq-container',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.scss']
})
export class FaqContainerComponent {

}
