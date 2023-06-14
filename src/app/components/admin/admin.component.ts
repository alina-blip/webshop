import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MyErrorStateMatcher } from '../footer/footer.component'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, MatCardModule, ReactiveFormsModule, FormsModule, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  username: string="";
  password: string="";
  hide = true;
  submit(){

  }
}
