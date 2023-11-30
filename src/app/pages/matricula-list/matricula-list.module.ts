import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatriculaListPageRoutingModule } from './matricula-list-routing.module';

import { MatriculaListPage } from './matricula-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatriculaListPageRoutingModule
  ],
  declarations: [MatriculaListPage]
})
export class MatriculaListPageModule {}
