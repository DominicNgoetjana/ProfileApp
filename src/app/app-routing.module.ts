import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import UserService from './shared/api/user.service';

const routes: Routes = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [UserService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
