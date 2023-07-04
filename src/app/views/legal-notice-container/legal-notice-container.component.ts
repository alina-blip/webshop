import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalNoticeComponent } from '../../components/legal-notice/legal-notice.component'

@Component({
  selector: 'elw-legal-notice-container',
  standalone: true,
  imports: [CommonModule, LegalNoticeComponent],
  templateUrl: './legal-notice-container.component.html',
  styleUrls: ['./legal-notice-container.component.scss']
})
export class LegalNoticeContainerComponent {

}
