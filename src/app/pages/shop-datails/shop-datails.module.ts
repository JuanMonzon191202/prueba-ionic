import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { QRCodeModule } from 'angularx-qrcode';

import { ShopDatailsPageRoutingModule } from './shop-datails-routing.module';
import { ShopDatailsPage } from './shop-datails.page';
// import { QrModalComponent } from './qr-modal.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShopDatailsPageRoutingModule,
    QRCodeModule
  ],
  declarations: [ShopDatailsPage]
})
export class ShopDatailsPageModule {}
