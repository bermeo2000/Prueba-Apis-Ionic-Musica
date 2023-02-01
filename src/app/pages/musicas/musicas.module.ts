import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasPageRoutingModule } from './musicas-routing.module';

import { MusicasPage } from './musicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasPageRoutingModule
  ],
  declarations: [MusicasPage]
})
export class MusicasPageModule {}
