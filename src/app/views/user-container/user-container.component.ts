import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../components/user/user.component'
import { Observable } from 'rxjs'
import { User } from '../../user.service'

@Component({
  selector: 'elw-user-container',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent {

  user$: Observable<User> | undefined;

}
