import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
// Booking Service
export class BookingService {
  // Add Movie
  addMovie(movie: Movie) {
    throw new Error('Method not implemented.');
  }
  // Prop ID
  newPropID(): number {
    throw new Error('Method not implemented.');
  }
  constructor() { }
}
