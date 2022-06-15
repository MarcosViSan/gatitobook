import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenssagensRoutingModule } from './menssagens-routing.module';
import { MenssagenComponent } from './menssagen/menssagen.component';


@NgModule({
  declarations: [
    MenssagenComponent
  ],
  imports: [
    CommonModule,
    MenssagensRoutingModule
  ],
  exports:[
    MenssagenComponent
  ]
})
export class MenssagenModule { }
