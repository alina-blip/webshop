import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component'
import { LoginData, UserService } from '../../user.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'elw-login-container',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {

  loginData$: Observable<LoginData> | undefined;
  constructor (private userService: UserService) {
  }
  login(loginData: LoginData) {
    this.loginData$ = this.userService.login(loginData);
  }
}
