import { Router } from '@angular/router';
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

  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.router.navigate(['/']);
  }
  updateUser(user: User) {
    this.userService.updateUser(user).subscribe();
    this.router.navigate(['/signUp']);
  }
  deconnection() {
    this.userService.userSession = null;
    this.router.navigate(['/']);
  }
  newRecip() {
    this.router.navigate(['/newRecip']);
  }
}
