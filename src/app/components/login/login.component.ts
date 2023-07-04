import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router'
import { LoginData } from '../../user.service'

@Component({
  selector: 'elw-login',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  hide = true;
  @Output() login: EventEmitter<LoginData> = new EventEmitter<LoginData>();
  @Input() logindata: LoginData | null = null;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.loginForm) {
      this.login.emit(this.loginForm.value as LoginData);
    }
  }
}
