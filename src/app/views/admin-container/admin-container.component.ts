import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../../components/admin/admin.component'

@Component({
  selector: 'elw-admin-container',
  standalone: true,
  imports: [CommonModule, AdminComponent],
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent {

}
