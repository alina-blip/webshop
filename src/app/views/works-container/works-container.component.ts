import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { WorksComponent } from '../../components/works/works.component';

@Component({
  selector: 'elw-works-container',
  standalone: true,
  imports: [CommonModule, WorksComponent],
  templateUrl: './works-container.component.html',
  styleUrls: ['./works-container.component.scss'],
})
export class WorksContainerComponent {

}
