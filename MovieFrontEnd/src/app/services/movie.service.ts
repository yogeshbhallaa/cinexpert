import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { environment } from 'src/environments/environment';
import { IShowTime } from '../model/ishowtime';
import { Booking } from '../model/booking';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
// Movie Service
export class MovieService {
  baseUrl = environment.baseUrl;
  orderDbName: string;
  orderDbURL: string;
  idURL: string;
  constructor(private http: HttpClient) {
    this.orderDbName = '/STClasses';
    this.orderDbURL = `${environment.baseUrl}${this.orderDbName}`;
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl + '/Movies');
  }
  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
  addMovie(movie: Movie) {
    let newProp = [movie];
    if (localStorage.getItem('newProp')) {
      newProp = [movie,
        ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }
  addShow(show: IShowTime) {
    let newShow = [show];
    if (localStorage.getItem('newShow')) {
      newShow = [show,
        ...JSON.parse(localStorage.getItem('newShow'))];
    }
    localStorage.setItem('newShow', JSON.stringify(newShow));
  }
  getMovie(id: number) {
    return this.getAllMovies().pipe(
      map(moviesArray => {
        return moviesArray.find(p => p.id === id);
      })
    );
  }
  addMovies(movie: Movie): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/Movies', movie);
  }
  updateMovie(id: number, movie: Movie): Observable<void> {
    return this.http.put<void>(this.baseUrl + '/Movies/' + id, movie);
  }
  updateShow(id: number, show: IShowTime): Observable<void> {
    return this.http.put<void>(this.baseUrl + '/ShowTimes/' + id, show);
  }
  addBooking(booking: Booking): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/Bookings', booking);
  }
  addShows(shows: IShowTime): Observable<void> {
    console.log(shows);
    return this.http.post<void>(this.baseUrl + '/ShowTimes', shows);
  }
  addReview(review: Review): Observable<void> {
    console.log(review);
    return this.http.post<void>(this.baseUrl + '/Reviews', review);
  }
  getShows(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/ShowTimes');
  }
  getReviews(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/Reviews');
  }
  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/Bookings');
  }
  deleteBookingWithId(id: number): Observable<any[]> {
    return this.http.delete<any[]>(this.baseUrl + '/Bookings/' + id);
  }
  deleteMovieWithId(id: number): Observable<any[]> {
    return this.http.delete<any[]>(this.baseUrl + '/Movies/' + id);
  }
  getMovieById(Movieid: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/Movies/' + Movieid);
  }
}
