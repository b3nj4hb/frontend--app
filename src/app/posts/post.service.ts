import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Post } from './post';
import { map, catchError, throwIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlpost: string = 'http://localhost:9292/api/usuario'
  constructor(private http: HttpClient, private router: Router) { }
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlpost + '/all');
  }
  create(post:Post):Observable<Post>{
    return this.http.post(this.urlpost + '/create', post)
    .pipe(
      map((response: any)=> response.post as Post),
      catchError(e =>{
        if(e.status == 400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }
  getPostId(id:number):Observable<Post>{
    return this.http.get<Post>(`${this.urlpost}/${id}`).pipe(
      catchError(e=>{
        if(e.status != 401 && e.console.error.mensaje){
          this.router.navigate(['/posts']);
        }
        return throwError(0);
      }));
  }
  update(post:Post):Observable<any>{
    return this.http.put<any>(`${this.urlpost}/${post.idusuario}`, post).pipe(
      // aqui puse el idusuario porque reemplace el post.ts por los datos de usuario
      catchError(e =>{
        if (e.status == 400){
          return throwError(e);
        }
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }
  delete(id:number):Observable<Post>{
    return this.http.delete<Post>(`${this.urlpost}/${id}`).pipe(
      catchError(e =>{
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }
}