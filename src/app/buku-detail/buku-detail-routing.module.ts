import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukuDetailPage } from './buku-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BukuDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukuDetailPageRoutingModule {}
