import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component'

@Component({
  selector: 'elw-login-container',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {

}
