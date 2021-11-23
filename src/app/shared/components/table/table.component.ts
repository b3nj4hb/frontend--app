import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adra-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() titulos:string[]=[];
@Input() filas: any;
objectKeys = Object.keys;
  constructor() { }
 /* data = [
    {titulo: "Los tres cerditos",descripcion:"Estan contentos y pachonchitos"},
    {titulo: "Los tres cerditos",descripcion:"Estan contentos y pachonchitos"},
    {titulo: "Los tres cerditos",descripcion:"Estan contentos y pachonchitos"},
    {titulo: "Los tres cerditos",descripcion:"Estan contentos y pachonchitos"},
    {titulo: "Los tres cerditos",descripcion:"Estan contentos y pachonchitos"},
    {titulo: "Los tres cerditos",descripcion:"Estan contentos y pachonchitos"},
    {titulo: "Los tres cerditos",descripcion:"Estan contentos y pachonchitos"}

  ]*/
  ngOnInit(): void { }

}
