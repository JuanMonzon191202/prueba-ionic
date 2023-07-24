import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  products: any[] = [];
  // movies: any[];
  currentPage = 1;

  constructor(
    private shopService: ShopService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  async loadProduct() {
    const loading = await this.loadingController.create({
      message: 'cargando...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.shopService.getTopRatedShop().subscribe((res: any) => {
      loading.dismiss();
      this.products = res;
      console.log(res);
    });
  }
}
