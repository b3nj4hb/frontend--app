import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    TitleComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    TableComponent
  ]
})
export class SharedModule { }
