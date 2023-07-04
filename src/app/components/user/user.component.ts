import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common';
import { User } from '../../user.service'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'elw-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input() user: User | null = null;

}
