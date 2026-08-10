import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowTime } from '../model/showtime';

@Injectable({
  providedIn: 'root'
})
// Show Time
export class ShowtimeService {
  showtime: ShowTime[];
  selectedShow = ShowTime;
  readonly baseURL = "http://localhost:46618/api";
  constructor(private http: HttpClient) { }
  postShow(emp: ShowTime) {
    return this.http.post(this.baseURL + '/ApplicationUser/showtime', emp);
  }
  putShow(emp: ShowTime) {
    return this.http.put(this.baseURL + `/${emp.date}`, emp);
  }
  deleteShow(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
