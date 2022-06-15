import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private apiClient: HttpClient) { }

  autenticar(login: string, senha: string): Observable<any>{
    return this.apiClient.post("http://localhost:3000/user/login", {
      userName: login,
      password: senha
    });
  }
}
