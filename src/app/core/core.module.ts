import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { LoginComponent } from './presentation/views/login/login.component';
import { MenuComponent } from './presentation/views/menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports:[PageLoginComponent, MenuComponent]
})
export class CoreModule { }
