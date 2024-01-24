import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuListPageRoutingModule } from './buku-list-routing.module';

import { BukuListPage } from './buku-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuListPageRoutingModule
  ],
  declarations: [BukuListPage]
})
export class BukuListPageModule {}
