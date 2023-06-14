import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, MatGridListModule, RouterLink],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

}