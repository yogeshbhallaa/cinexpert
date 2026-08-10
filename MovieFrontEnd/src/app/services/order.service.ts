import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { order } from '../model/order';
import { HttpClient } from '@angular/common/http';

@Injectable()
// Order Service
export class OrderService {
  orderDbName: string;
  orderDbURL: string;
  idURL: string;
  constructor(private http: HttpClient) {
    this.orderDbName = 'orders';
    this.orderDbURL = `${environment.baseUrl}${this.orderDbName}`;
  }
  viewUserOrders(_id: string): Observable<Array<order>> {
    this.idURL = `${_id}`;
    return this.http.get<Array<order>>(`${this.orderDbURL}/${this.idURL}`);
  }
  createOrder(order: order): Observable<order> {
    let neworder: order;
    neworder = order;
    return this.http.post<order>(`${environment.baseUrl}${this.orderDbName}`, neworder);
  }
  orderbookedseats(movieId: string, showtime: string, date: String): Observable<Array<order>> {
    return this.http.get<Array<order>>(`${this.orderDbURL}/${movieId}/${showtime}/${date}`);
  }
}
