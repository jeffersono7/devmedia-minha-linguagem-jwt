import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public _usuario: BehaviorSubject<Usuario>;
  public readonly usuario$: Observable<Usuario>;

  constructor(private http: HttpClient) {
    this._usuario = new BehaviorSubject({} as Usuario);
    this.usuario$ = this._usuario.asObservable();
  }

  setUsuario(usuario: Usuario) {
    this._usuario.next(usuario);
  }

  cadastrar(usuario: Usuario) {
    const url = `${environment.linguagensApiUrl}/usuarios`;
    return this.http.post(url, usuario);
  }
}
