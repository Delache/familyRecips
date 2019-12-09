import { User } from './../../shared/models/user';
import { Router } from '@angular/router';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router) { }

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
