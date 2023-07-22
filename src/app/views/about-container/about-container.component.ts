import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'elw-about-container',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss'],
})
export class AboutContainerComponent {}
