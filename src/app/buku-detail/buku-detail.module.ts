import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuDetailPageRoutingModule } from './buku-detail-routing.module';

import { BukuDetailPage } from './buku-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuDetailPageRoutingModule
  ],
  declarations: [BukuDetailPage]
})
export class BukuDetailPageModule {}
