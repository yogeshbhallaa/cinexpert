import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import { ShowTimeComponent } from './movie/show-time/show-time.component';
import { DateFormatPipe } from './movie/movie-card/filter.pipe';
import { FilterPipe2 } from './movie/movie-card/filter2.pipe';
import { FilterPipe3 } from './movie/movie-list/filter3.pipe';
import { DatePipe } from '@angular/common';
import { FilterPipe } from './Pipes/filter.pipe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { OrderService } from './services/order.service';
import { RouteResolver } from './auth/route.resolver';
import { EditMovieComponent } from './movie/edit-movie/edit-movie.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
 import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { MovieCardComponent } from './movie/movie-card/movie-card.component';
import  { MovieListComponent}from './movie/movie-list/movie-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { MovieService } from './services/movie.service';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import {  FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { SeatSelectionComponent } from './movie/seat-selection/seat-selection.component';
import { UserReviewComponent } from './user/user-review/user-review.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminMovieListComponent } from './movie/admin-movie-list/admin-movie-list.component';
import { TabsModule } from 'ngx-bootstrap/tabs/';

const appRoutes: Routes = [
  {path: '' , component:MovieListComponent,resolve:{results:RouteResolver}},
  {path: 'add-movie' , component:AddMovieComponent,canActivate:[AuthGuard]},
  {path: 'edit-movie/:id' , component:EditMovieComponent},
  {path: 'admin/movies' , component:AdminMovieListComponent,canActivate:[AuthGuard],resolve:{results:RouteResolver}},
  {path: 'my-bookings' , component:OrderHistoryComponent,canActivate:[AuthGuard]},
  {path: 'movie-detail/:id' , component:MovieDetailComponent,canActivate:[AuthGuard]},
  {path: 'seat-selection/:id/:date' , component:SeatSelectionComponent},
  {path: 'user/login' , component:UserLoginComponent},
  {path: 'user/register' , component:UserRegisterComponent},
  {path: 'user/review' , component:UserReviewComponent,canActivate:[AuthGuard]},
  {path: '**' , component:MovieListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      AddMovieComponent,
      MovieCardComponent,
      MovieListComponent,
      MovieDetailComponent,
      UserLoginComponent,
      UserRegisterComponent,
      SeatSelectionComponent,
      UserReviewComponent,
      OrderHistoryComponent,
      AdminMovieListComponent,
      ShowTimeComponent,
      DateFormatPipe,
      FilterPipe2,
      FilterPipe3,
      FilterPipe,
      EditMovieComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [
    DatePipe,
    MovieService,
    UserService,
    OrderService,
 NavBarComponent,
    RouteResolver,
    AlertifyService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
