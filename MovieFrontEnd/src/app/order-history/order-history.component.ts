import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
// Order History Component
export class OrderHistoryComponent implements OnInit {
  username: string;
  booking: Booking[] = [];
  currentDate = new Date();
  month: string = '08';
  year: string = '';
  d: string = '';
  date: string = this.currentDate + '';
  constructor(private movieService: MovieService, private router: Router, private alertify: AlertifyService) {
  }
  dateFormat() {
    this.year = this.date.substr(11, 4)
    this.d = this.date.substr(8, 2)
    this.date = this.year + '-' + this.month + '-' + this.d
  }
  ngOnInit(): void {
    this.dateFormat()
    this.username = localStorage.getItem('user');
    console.log(this.username);
    this.movieService.getBookings().subscribe(
      data => {
        this.booking = data;
        console.log(this.booking);
      }
    )
  }
  // On Cancel
  onCancel(Id) {
    this.movieService.deleteBookingWithId(Id).subscribe(
      () => console.log("cancel request")
    );
    this.alertify.success("Booking cancelled")
    location.reload();
  }
}
