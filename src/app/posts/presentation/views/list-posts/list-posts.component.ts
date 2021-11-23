import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/posts/post';
import { PostService } from 'src/app/posts/post.service';

@Component({
  selector: 'adra-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  posts: Post[] = [];
  titulos: string[] = ["ID", "Nombre", "Descripcion", "ACCION"];
  filas: any = [
    { id: '1', titulo: 'Los tres cerditos', descripcion: 'Estan contentos y pachonchitos' },
    { id: '2', titulo: 'HTML5', descripcion: 'Lenguaje de Etiquetas' },
    { id: '3', titulo: 'JAVA', descripcion: 'Lenguaje de Tipado estricto' },
    { id: '4', titulo: 'Python', descripcion: 'Lenguaje multiplataforma' },
  ]
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getPost().subscribe((data: any[])=>{
      console.log(data);
    })
  }

}
