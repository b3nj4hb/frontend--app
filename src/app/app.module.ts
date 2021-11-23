import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const routes: Routes=[
  {path: '', component: PageLoginComponent},
  {path: '**', redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CoreModule,AppRoutingModule,HttpClientModule, FormsModule, ReactiveFormsModule 
  ],
  providers: [
    
    // {provide:MenuService, useClass: MenuService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
