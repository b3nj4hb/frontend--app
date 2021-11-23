import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/users/usuario';
import { UserService } from 'src/app/users/user.service';
@Component({
  selector: 'adra-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  usuarios: Usuario[] = [];
  titulos: string[] = ["ID","USERNAME","PASSWORD","ESTADO", "ACCION"];
  filas: any =[
    {id:'1',username:'dreyna',password:'1234567', estado:true},
    {id:'2',username:'jromero',password:'2342323', estado:false},
    {id:'3',username:'anareyes',password:'65ryr5656', estado:false},
    {id:'4',username:'rrojas',password:'232erer4545r', estado:true},
  ]
  constructor(private usuarioService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((data: any[])=>{
      console.log(data);
    })
  }

}
