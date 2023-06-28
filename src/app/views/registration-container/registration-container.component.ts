import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from '../../components/registration/registration.component';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { User, UserService } from '../../user.service';

@Component({
  selector: 'elw-registration-container',
  standalone: true,
  imports: [CommonModule, RegistrationComponent],
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
})
export class RegistrationContainerComponent {
  constructor(private userService: UserService) {}
  user$: Observable<User> | undefined;

  addUser(user: User) {
    this.user$ = this.userService.addUser(user);
  }
}
