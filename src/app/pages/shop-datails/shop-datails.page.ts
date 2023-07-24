import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import { CartService } from 'src/app/services/cart.service';
import * as QRCode from 'qrcode'; // Importa la librería qrcode

@Component({
  selector: 'app-shop-datails',
  templateUrl: './shop-datails.page.html',
  styleUrls: ['./shop-datails.page.scss'],
})
export class ShopDatailsPage implements OnInit {
  titulo = null;
  imagen = null;
  categoria = null;
  price = null;
  description = null;
  id = null;
  cart: any[] = [];
  product: any;
  qrData: string = '';

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      console.error('No se proporcionó un ID de tienda en la URL');
      return;
    }

    this.shopService.getShopDetails(id).subscribe((res: any) => {
      // console.log(res);

      this.titulo = res.title;
      this.imagen = res.image;
      this.categoria = res.category;
      this.price = res.price;
      this.description = res.description;
      this.id = res.id;
      this.product = res;
      // console.log(this.product);

      // Generar el código QR con la información del producto
      this.generateQRCode(JSON.stringify(res));
    });
  } qrFileName = 'codigo_qr.png';

  // Función para generar el código QR
  generateQRCode(data: string) {
    QRCode.toDataURL(data, (err: any, url: string) => {
      if (err) {
        console.error('Error generando el código QR', err);
        return;
      }

      this.qrData = url; // Asigna la URL del código QR a qrData
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Producto agregado al carrito');
  }
  showQrCode = false; // Agrega esta variable

  // ... (otros métodos)

  toggleQrCode() {
    this.showQrCode = !this.showQrCode;
  }
  descargarCodigoQR() {
    const a = document.createElement('a');
    a.href = this.qrData;
    a.download = 'codigo_qr.png';
    a.click();
  }
}
