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
    private route: ActivatedRoute) {}

  newUser: User = new User();

  ngOnInit() {
  }

  onReset(createUser: NgForm) {
    createUser.resetForm();
  }

  onFormSubmit(newUser: User) {
      this.userService.addUser(this.newUser).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }

  onUpdateUser(newUser: User) {
    this.userService.updateUser(this.newUser).subscribe();
    this.router.navigate(['/user']);
  }

  onClose() {
    this.router.navigate(['/user']);
  }
}

