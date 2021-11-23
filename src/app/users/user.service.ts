import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';
import { map, catchError, throwIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlusuario: string = 'http://localhost:9292/api/usuario'
  constructor(private http: HttpClient, private router: Router) { }
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlusuario + '/all');
  }
  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post(this.urlusuario + '/create', usuario)
    .pipe(
      map((response: any)=> response.usuario as Usuario),
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
  getPostId(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlusuario}/${id}`).pipe(
      catchError(e=>{
        if(e.status != 401 && e.console.error.mensaje){
          this.router.navigate(['/posts']);
        }
        return throwError(0);
      }));
  }
  update(usuario:Usuario):Observable<any>{
    return this.http.put<any>(`${this.urlusuario}/${usuario.idusuario}`, usuario).pipe(
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
  delete(id:number):Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlusuario}/${id}`).pipe(
      catchError(e =>{
        if(e.error.mensaje){
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }
}
