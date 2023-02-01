import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasPage } from './musicas.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasPageRoutingModule {}
