import { UserService } from './../../shared/services/user.service';
import { User } from './../../shared/models/user';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.userSession;
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
     }
}

