import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuppliersData, OrderDetailsData } from './app.model';

@Injectable({
  providedIn:'root'
})
export class HttpDataService {

  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:41053/api/OrderDetailsData";
   }

   get(): Observable<OrderDetailsData[]> {
     let resp: Observable<OrderDetailsData[]> = null;
     resp = this.http.get<OrderDetailsData[]>(this.url);
     return resp;
   }


}
