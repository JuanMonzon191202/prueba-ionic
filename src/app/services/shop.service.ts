import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}

  getTopRatedShop(): Observable<any> {
    return this.http.get(`${environment.baseUrl}`);
  }
  getShopDetails(id: any) {
    return this.http.get(`${environment.baseUrl}/${id}`);
  }
}
