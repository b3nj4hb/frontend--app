import { Component, Injectable } from '@angular/core';


@Component({
  selector: 'adra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adra-app-model';
  status: boolean = false;
  expanded = true;
  clickEvent(){
      this.status = !this.status;       
  }
  constructor(){

  }
  ngOnInit(){

  }
}
