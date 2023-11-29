import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatriculaListPage } from './matricula-list.page';

const routes: Routes = [
  {
    path: '',
    component: MatriculaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatriculaListPageRoutingModule {}
