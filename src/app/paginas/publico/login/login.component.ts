import { Component } from '@angular/core';

import { Usuario } from 'src/app/interfaces/usuario';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: Usuario = <Usuario>{};

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  onSubmit() {
    this.authService.logar(this.usuario).subscribe(() => {
      this.toastr.success('Login realizado com sucesso.', 'Show!');
    }, (erro) => {
      if (erro.status && erro.status === 401) {
        this.toastr.error('E-mail e/ou senha incorretos.', 'Falha!');
      } else {
        this.toastr.error('Não foi possível realizar login.', 'Falha!');
      }
    });
  }

}
