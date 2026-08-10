# CineBook — Angular Movie Ticket Booking

CineBook is a full-stack movie ticket booking application built with **Angular** on the frontend and **ASP.NET Core Web API + SQL Server** on the backend.

The UI is designed around a simple cinema workflow: discover movies → open details → select a show → choose seats → book tickets → review booking history.

## UI Preview

### Admin Dashboard
![Admin Dashboard](docs/01-admin-dashboard.png)

### User Login
![User Login](docs/02-user-login.png)

### Home / Movie Dashboard
![Home Movie Dashboard](docs/03-home-movie-dashboard.png)

### Top Movies
![Top Movies](docs/04-user-home-top-movies.png)

### Movie Details
![Movie Details](docs/05-user-movie-details.png)

### Show Times
![Show Times](docs/06-user-show-times.png)

### Seat Selection
![Seat Selection](docs/07-user-seat-selection.png)

### Booking Confirmation
![Booking Confirmation](docs/08-booking-confirmation.png)

### Booking History
![Booking History](docs/09-user-booking-history.png)

### Admin Movie Management
![Admin Movie Management](docs/10-admin-movie-management.png)

### Add Movie
![Add Movie](docs/11-add-movie.png)

### Reviews
![Reviews](docs/12-user-review.png)

## Features

### User
- Register and sign in
- Browse movie catalog
- Search movies by name
- Filter movies by release date
- View movie details, rating, language, runtime and director
- Browse available show times
- Select seats
- Book tickets
- View booking history
- Submit movie reviews

### Admin
- Add movies
- Edit movie details
- Delete movies
- Manage show times
- View/manage booking data
- Manage the movie catalog through the API

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT authentication
- ASP.NET Identity
- Repository / Unit of Work pattern
- AutoMapper
- Swagger API documentation

## Movie Catalog Update

The backend includes a small presentation-ready catalog with recognizable movies such as:
- Inception
- Interstellar
- Oppenheimer
- Dune: Part Two
- Avengers: Endgame
- Spider-Man: Across the Spider-Verse

## Architecture

```text
Angular Client
     |
     | HTTP / JSON + JWT
     v
ASP.NET Core Web API
     |
     +--> Controllers
     |      +-- Movies
     |      +-- ShowTimes
     |      +-- Bookings
     |      +-- Reviews
     |      +-- Users / Authentication
     |
     +--> Services / Repository / Unit of Work
     |
     +--> Entity Framework Core
     |
     v
SQL Server Database
```

## Frontend Structure

```text
MovieFrontEnd/
└── MovieFrontEnd/
    └── src/
        ├── app/
        │   ├── auth/
        │   ├── movie/
        │   │   ├── add-movie/
        │   │   ├── admin-movie-list/
        │   │   ├── edit-movie/
        │   │   ├── movie-card/
        │   │   ├── movie-detail/
        │   │   └── movie-list/
        │   ├── services/
        │   ├── user/
        │   ├── model/
        │   └── nav-bar/
        ├── data/
        ├── environments/
        └── styles.css
```

## Backend Structure

```text
MovieAPI/
└── MovieAPI/
    ├── Controllers/
    ├── Data/
    │   ├── Entitis/
    │   ├── Repo/
    │   └── MovieCatalogSeeder.cs
    ├── Dtos/
    ├── Helpers/
    ├── Migrations/
    ├── Model/
    ├── appsettings.json
    └── Startup.cs
```

## Main Booking Flow

```text
Login / Register
      ↓
Home / Movie Dashboard
      ↓
Movie Details
      ↓
Show Times
      ↓
Seat Selection
      ↓
Booking / Payment
      ↓
Booking Confirmation
      ↓
Booking History
```

## Technologies

**Frontend**
- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap
- AlertifyJS

**Backend**
- ASP.NET Core
- C#
- Entity Framework Core
- SQL Server
- ASP.NET Identity
- JWT
- AutoMapper
- Swagger

## Getting Started

### Backend

Open the `MovieAPI/MovieAPI` project in Visual Studio.

1. Configure the SQL Server connection in `appsettings.json`.
2. Restore NuGet packages.
3. Apply the Entity Framework migrations.
4. Run the ASP.NET Core API.
5. Open Swagger in development to verify the API endpoints.

### Frontend

Open:

```text
MovieFrontEnd/MovieFrontEnd
```

Then:

```bash
npm install
ng serve
```

Open the Angular application at the local URL shown by Angular CLI.

Make sure the API URL in the environment configuration points to the running backend.

## API Areas

The application communicates with API resources including:

```text
/Movies
/ShowTimes
/Bookings
/Reviews
/ApplicationUser
```


## Future Improvements

- Payment gateway integration
- Movie search with advanced filters
- Cinema/location selection
- QR-code e-tickets
- Email booking confirmation
- Pagination
- Better seat-locking/concurrency handling
- Docker deployment
- Automated frontend and API tests
