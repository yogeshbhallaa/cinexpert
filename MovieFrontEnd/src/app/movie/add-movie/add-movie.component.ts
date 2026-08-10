import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IShowTime } from 'src/app/model/ishowtime';
import { Movie } from 'src/app/model/movie';
import { ShowTime } from 'src/app/model/showtime';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MovieService } from 'src/app/services/movie.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
// Add Movie 
export class AddMovieComponent implements OnInit {
  movie: Movie = {
    movieName: '',
    movieType: '',
    movieDescription: '',
    language: '',
    length: '',
    directedBY: '',
    category: '',
    releaseDate: '',
    rating: '',
    image: '',
  }
  movieView: Movie = {
    movieName: '',
    movieType: '',
    movieDescription: '',
    language: '',
    length: '',
    directedBY: '',
    category: '',
    releaseDate: '',
    rating: '',
  };
  uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    imgSrc: new FormControl('', [Validators.required])
  });
  imgFile: string;
  show1: ShowTime;
  showform: FormGroup;
  ImgURL: string = '';
  addMovieForm: FormGroup;
  nextClicked: boolean;

  show = new ShowTime();
  movieList: any[];
  @ViewChild('formTabs') formTabs: TabsetComponent;

  showtimeViewX: IShowTime[] = [];
  showtimeView: IShowTime = {
    moviename: '',
    date: '',
    time: '',
    fare: '',
  };
  constructor(private fb: FormBuilder, private router: Router, private movieService: MovieService, private datePipe: DatePipe, private alertify: AlertifyService, private httpClient: HttpClient) { }
  ngOnInit() {
    this.CreateAddMovieForm();
  }
  get uf() {
    return this.uploadForm.controls;
  }

  onImageChange(e) {
    const reader = new FileReader();

    if (e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          imgSrc: reader.result
        });

      };
    }
  }
  // Create Add Movie
  CreateAddMovieForm() {
    this.addMovieForm = this.fb.group({
      // Basic Info
      BasicInfo: this.fb.group({
        MovieName: [null, Validators.required],
        MovieType: [null, Validators.required],
        MovieDescription: [null, Validators.required],
      }),
      // Add Show
      AddShow: this.fb.group({
        Date: [null, Validators.required],
        Time: [null, Validators.required],
        Fare: [null, Validators.required],
      }),
      // Other Detail
      OtherDetail: this.fb.group({
        Length: [null, Validators.required],
        Language: [null, Validators.required],
        Rating: [null, Validators.required],
        DirectedBY: [null, Validators.required],
        Category: [null, Validators.required],
        ReleaseDate: [null, Validators.required],
      }),
    });
  }
  // Add Image
  addimage(image) {
    console.log(image.value);
    this.movie.image = image.value;
  }
  // submit
  onSubmit() {
    this.nextClicked = true;
    if (this.allTabsValid()) {
      this.mapProperty();
      this.movieService.addMovies(this.movie).subscribe(
        () => console.log("request served")
      );
      for (let i = 0; i < this.showtimeViewX.length; i++) {
        this.showtimeViewX[i].moviename = this.movie.movieName;
        this.movieService.addShows(this.showtimeViewX[i]).subscribe(
          () => console.log("request served")
        );
        ;
      }
      this.alertify.success('congrats,your property listed successfully on our website');
      this.router.navigate(['/admin/movies']);
    } else {
      this.alertify.error('please review the form and provide  all valid information');
    }
  }
  //On Click
  onClick() {

    this.showtimeViewX.push({
      date: this.showtimeView.date,
      fare: this.showtimeView.fare,
      moviename: this.showtimeView.moviename,
      time: this.showtimeView.time,
    });
    this.AddShow.reset();
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }


  mapProperty(): void {
    this.movie.movieName = this.MovieName.value;
    this.movie.movieType = this.MovieType.value;
    this.movie.movieDescription = this.MovieDescription.value;
    this.movie.length = this.Length.value;
    this.movie.rating = this.Rating.value;
    this.movie.language = this.Language.value;
    this.movie.releaseDate = this.ReleaseDate.value;
    this.movie.directedBY = this.DirectedBY.value;
    this.movie.category = this.Category.value;
    this.movie.estPossessionOn =
      this.datePipe.transform(this.ReleaseDate.value, 'MM/dd/yyyy');

  }
  onClick1() {
    console.log(this.ImgURL)
  }
  // All Tabs  Vaild
  allTabsValid() {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return;
    }
    if (this.AddShow.valid) {
      this.formTabs.tabs[1].active = true;
      return;
    }
    if (this.OtherDetail.invalid) {
      this.formTabs.tabs[2].active = true;
      return;
    }
    return true;
  }
  // BasicInfo
  get BasicInfo() {
    return this.addMovieForm.controls.BasicInfo as FormGroup;
  }
  //AddShow
  get AddShow() {
    return this.addMovieForm.controls.AddShow as FormGroup;
  }
  //OtherDetail
  get OtherDetail() {
    return this.addMovieForm.controls.OtherDetail as FormGroup;
  }
  //Photos
  get Photos() {
    return this.addMovieForm.controls.Photos as FormGroup;
  }
  //MovieName
  get MovieName() {
    return this.BasicInfo.controls.MovieName as FormControl;
  }
  //MovieType
  get MovieType() {
    return this.BasicInfo.controls.MovieType as FormControl;
  }
  // MovieDescription
  get MovieDescription() {
    return this.BasicInfo.controls.MovieDescription as FormControl;
  }
  //Date
  get date() {
    return this.AddShow.controls.Date as FormControl;
  }
  // Time
  get time() {
    return this.AddShow.controls.Time as FormControl;
  }
  // Fare
  get fare() {
    return this.AddShow.controls.Fare as FormControl;
  }
  // Length
  get Length() {
    return this.OtherDetail.controls.Length as FormControl;
  }
  // Rating
  get Rating() {
    return this.OtherDetail.controls.Rating as FormControl;
  }
  // Language
  get Language() {
    return this.OtherDetail.controls.Language as FormControl;
  }
  //DirectedBY
  get DirectedBY() {
    return this.OtherDetail.controls.DirectedBY as FormControl;
  }
  //ReleaseDate
  get ReleaseDate() {
    return this.OtherDetail.controls.ReleaseDate as FormControl;
  }
  //Category
  get Category() {
    return this.OtherDetail.controls.Category as FormControl;
  }
}
