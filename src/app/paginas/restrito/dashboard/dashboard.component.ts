import { Component, OnInit } from '@angular/core';
import { LinguagemService } from 'src/app/services/linguagem.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Linguagem } from 'src/app/interfaces/linguagem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public linguagemService: LinguagemService,
    private toastr: ToastrService,
    public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.atualizarLinguagem();
  }

  atualizarLinguagem() {
    this.linguagemService.atualizarLinguagens().subscribe(
      () => {},
      () => {
        this.toastr.error('Falha ao atualizar listagem de linguagens.', 'Falha!');
      });
  }

  curtirLinguagem(linguagem: Linguagem) {
    this.linguagemService.curtirLinguagem(linguagem).subscribe(
      () => {
        this.toastr.success(`Você curtiu <b>${linguagem.nome}</br>`, 'Show!');
        this.atualizarLinguagem();
      },
      () => {
        this.toastr.error('Não foi possível curtir a linguagem', 'Falha!');
      }
    );
  }

}
