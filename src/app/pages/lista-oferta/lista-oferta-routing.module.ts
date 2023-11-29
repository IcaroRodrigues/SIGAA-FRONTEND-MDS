import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaOfertaPage } from './lista-oferta.page';

const routes: Routes = [
  {
    path: '',
    component: ListaOfertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaOfertaPageRoutingModule {}
