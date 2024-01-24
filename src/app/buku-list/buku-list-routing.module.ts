import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukuListPage } from './buku-list.page';

const routes: Routes = [
  {
    path: '',
    component: BukuListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukuListPageRoutingModule {}
