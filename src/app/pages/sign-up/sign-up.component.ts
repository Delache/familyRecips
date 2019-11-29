import { User } from './../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {

    }

  newUser: User;
  user: User;

  ngOnInit() {
    this.newUser = this.userService.userSession || new User() ;
 }
  onReset(createUser: NgForm) {
    createUser.resetForm();
  }
  onFormSubmit(user: User) {
      this.userService.addUser(user).subscribe();
      this.userService.userSession = this.newUser;
      this.router.navigate(['/user']);
  }
  onUpdateUser() {
    this.userService.updateUser(this.newUser).subscribe();
    this.router.navigate(['/user']);
  }

  onClose() {
    this.router.navigate(['/user']);
  }
}

