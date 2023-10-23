import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUsuario } from '../model/new-usuario.model';
import { LoginUsuario } from '../model/login.model';
import { JwtDto } from '../model/jwt-dto.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'https://challengebackend.onrender.com/auth';
  
  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NewUsuario): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };

    return this.httpClient.post<any>(this.authURL + 'register', nuevoUsuario, httpOptions);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario, httpOptions);
  }
}
