// Order
export class order {
  userid: String;
  movieid: String;
  totalamount: Number;
  creationtime: String;
  showtime: String;
  seatdetails: String;
  constructor(userid: String, movieid: String, showtime: String, seatdetails: String, totalamount: Number, creationtime: String) {
    this.userid = userid;
    this.movieid = movieid;
    this.showtime = showtime;
    this.totalamount = totalamount;
    this.creationtime = creationtime;
    this.seatdetails = seatdetails;
  }
}
