import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { SharedModule } from '../shared/shared.module';
import { ListUsersComponent } from './presentation/views/list-users/list-users.component';


@NgModule({
  declarations: [
    PageUserComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports:[PageUserComponent]
})
export class UsersModule { }
