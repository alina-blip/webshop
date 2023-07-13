import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../components/user/user.component'
import { Observable, switchMap } from 'rxjs'
import { User, UserService } from '../../user.service'
import { ShopService } from '../../shop.service'
import { OriginalService } from '../../original.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'elw-user-container',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit{

  user$: Observable<User> | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  //   this.user$ = this.route.paramMap.pipe(
  //     switchMap((params) => {
  //       return this.userService.getUserById(Number(params.get('id')));
  //   })
  // );}
}
}
