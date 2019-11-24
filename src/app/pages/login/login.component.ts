import { Router } from '@angular/router';
import { User } from './../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  user: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers()
                    .subscribe((response) => {
                       this.users = response;
                       });
  }
  getUser(data: User) {
    this.userService.userSession = data;
    this.router.navigate(['/user']);
  }
  signUp() {
    this.router.navigate(['/signUp']);
  }
 }
