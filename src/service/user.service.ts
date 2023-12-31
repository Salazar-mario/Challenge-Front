import { Injectable } from '@angular/core';
import { User } from 'src/app/../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  URL = environment.URL + 'auth/';
  constructor(private httpClient: HttpClient) {}

  public usuarios(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL + 'usuarios');
  }

  public details(id: number): Observable<User> {
    return this.httpClient.get<User>(this.URL + `usuarios/${id}`).pipe(
      tap((user: User) => {
        console.log('Detalles del usuario:', user);
      })
    );
  }
  

  public update(id: number, person: User): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, person);
  }

  public transactions(id: number): Observable<any> {
    return this.httpClient.get<any>(this.URL + `${id}/transacciones`);
  }
 

 
  public hacerTransaccion(data: any): Observable<any> {
    return this.httpClient.post(this.URL + '/realizarTransferencia', data);
  }
  
}
  
  
  
