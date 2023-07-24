import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharesPageRoutingModule } from './shares-routing.module';

import { SharesPage } from './shares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharesPageRoutingModule
  ],
  declarations: [SharesPage]
})
export class SharesPageModule {}
