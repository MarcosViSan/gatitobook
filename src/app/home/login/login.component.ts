import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(private autenticacao: AutenticacaoService, private rota: Router) { }

  ngOnInit(): void {

    console.log(document.querySelector(".form"))
  }

  login(): any {
    console.log(`${this.usuario}  ${this.senha}`);


    this.autenticacao.autenticar(this.usuario, this.senha).subscribe(() =>{
      console.log("Autenticado com sucesso");
      this.rota.navigate(['animais'])

    }, (error) => {
      console.log(error)
    })

  }

}
