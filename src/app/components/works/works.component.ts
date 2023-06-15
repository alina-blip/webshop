import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { Original } from '../../original.service'

@Component({
  selector: 'elw-works',
  standalone: true,
  imports: [CommonModule, MatGridListModule, RouterLink],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
}
