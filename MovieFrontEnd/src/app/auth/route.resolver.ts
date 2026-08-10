import { Observable, of } from 'rxjs';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
// Route Resolver
export class RouteResolver implements Resolve<Movie[]> {
  // Movie Service
  constructor(private movieService: MovieService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
    return this.movieService.getAllMovies();
  }
}
