import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenssagenModule } from '../menssagens/menssagens.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MenssagenModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ]
})
export class HomeModule {
}
