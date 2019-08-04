import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

import UserService from '../shared/api/user.service';
import User from '../shared/models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User = new User();

  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      const id = params['id'];

      if (id) {
        this.userService.get(id).subscribe((user: any) => {
          if (user) {
            this.user = user;
          } else {
            console.log(
              `User with id '${id}' not found, returning to list`
            );
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/user-list']);
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

}
