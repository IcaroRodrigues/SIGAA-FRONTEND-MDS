import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaOfertaPageRoutingModule } from './lista-oferta-routing.module';

import { ListaOfertaPage } from './lista-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaOfertaPageRoutingModule
  ],
  declarations: [ListaOfertaPage]
})
export class ListaOfertaPageModule {}
