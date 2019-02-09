import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Minha Linguagem - Dashboard';

  constructor(
    private router: Router,
    public authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    if (this.tokenService.token) {
      this.authService.criarSessao(this.tokenService.token);
    }

    this.authService.autenticado$.subscribe(autenticado => {
      if (autenticado) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
