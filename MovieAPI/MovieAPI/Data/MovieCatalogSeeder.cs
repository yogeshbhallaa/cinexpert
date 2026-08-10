using System;
using System.Collections.Generic;
using System.Linq;
using MovieAPI.Data.Entitis;

namespace MovieAPI.Data
{
    // Keeps the demo catalog presentation-ready without changing movie IDs used by bookings.
    public static class MovieCatalogSeeder
    {
        public static void UpdateDemoCatalog(AuthenticationDbContext db)
        {
            var movies = db.Movies.ToList();

              var oldDemo = movies.FirstOrDefault(x =>
                x.MovieName != null &&
                x.MovieName.Equals("Red Sparrow", StringComparison.OrdinalIgnoreCase));

            if (oldDemo != null)
            {
                Apply(oldDemo, Catalog[0]);
                db.SaveChanges();
                return;
            }

            // For a fresh database, add a small, polished starter catalog.
            if (!movies.Any())
            {
                foreach (var item in Catalog)
                {
                    db.Movies.Add(new Movie
                    {
                        MovieName = item.MovieName,
                        MovieType = item.MovieType,
                        MovieDescription = item.MovieDescription,
                        Rating = item.Rating,
                        Length = item.Length,
                        Language = item.Language,
                        DirectedBY = item.DirectedBY,
                        ReleaseDate = item.ReleaseDate,
                        Category = item.Category,
                        EstPossessionOn = item.EstPossessionOn,
                        Image = item.Image
                    });
                }

                db.SaveChanges();
            }
        }

        private static void Apply(Movie movie, Movie item)
        {
            movie.MovieName = item.MovieName;
            movie.MovieType = item.MovieType;
            movie.MovieDescription = item.MovieDescription;
            movie.Rating = item.Rating;
            movie.Length = item.Length;
            movie.Language = item.Language;
            movie.DirectedBY = item.DirectedBY;
            movie.ReleaseDate = item.ReleaseDate;
            movie.Category = item.Category;
            movie.EstPossessionOn = item.EstPossessionOn;
            movie.Image = item.Image;
        }

        private static readonly List<Movie> Catalog = new List<Movie>
        {
            new Movie
            {
                MovieName = "Inception",
                MovieType = "Sci-Fi",
                MovieDescription = "A skilled extractor enters layered dreams to plant an idea that can change a person's future.",
                Rating = "8.8",
                Length = "2h 28m",
                Language = "English",
                DirectedBY = "Christopher Nolan",
                ReleaseDate = "2010-07-16",
                Category = "Action",
                EstPossessionOn = "2010-07-16",
                Image = "https://image.tmdb.org/t/p/w780/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
            },
            new Movie
            {
                MovieName = "Interstellar",
                MovieType = "Sci-Fi",
                MovieDescription = "Explorers travel through a wormhole in search of a new home for humanity.",
                Rating = "8.7",
                Length = "2h 49m",
                Language = "English",
                DirectedBY = "Christopher Nolan",
                ReleaseDate = "2014-11-07",
                Category = "Adventure",
                EstPossessionOn = "2014-11-07",
                Image = "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },
            new Movie
            {
                MovieName = "Oppenheimer",
                MovieType = "Drama",
                MovieDescription = "The story of the scientist whose work changed the course of modern history.",
                Rating = "8.6",
                Length = "3h",
                Language = "English",
                DirectedBY = "Christopher Nolan",
                ReleaseDate = "2023-07-21",
                Category = "Biography",
                EstPossessionOn = "2023-07-21",
                Image = "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
            },
            new Movie
            {
                MovieName = "Dune: Part Two",
                MovieType = "Sci-Fi",
                MovieDescription = "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators.",
                Rating = "8.5",
                Length = "2h 46m",
                Language = "English",
                DirectedBY = "Denis Villeneuve",
                ReleaseDate = "2024-03-01",
                Category = "Adventure",
                EstPossessionOn = "2024-03-01",
                Image = "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
            },
            new Movie
            {
                MovieName = "Avengers: Endgame",
                MovieType = "Action",
                MovieDescription = "The Avengers assemble for one final mission to reverse the devastating events of the past.",
                Rating = "8.4",
                Length = "3h 1m",
                Language = "English",
                DirectedBY = "Anthony Russo, Joe Russo",
                ReleaseDate = "2019-04-26",
                Category = "Superhero",
                EstPossessionOn = "2019-04-26",
                Image = "https://image.tmdb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
            },
            new Movie
            {
                MovieName = "Spider-Man: Across the Spider-Verse",
                MovieType = "Animation",
                MovieDescription = "Miles Morales swings across the multiverse in a visually stunning superhero adventure.",
                Rating = "8.6",
                Length = "2h 20m",
                Language = "English",
                DirectedBY = "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
                ReleaseDate = "2023-06-02",
                Category = "Animation",
                EstPossessionOn = "2023-06-02",
                Image = "https://image.tmdb.org/t/p/w780/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
            }
        };
    }
}
