import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopDatailsPage } from './shop-datails.page';

const routes: Routes = [
  {
    path: '',
    component: ShopDatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopDatailsPageRoutingModule {}
