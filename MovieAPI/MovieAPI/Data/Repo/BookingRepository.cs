using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieAPI.Data.Entitis;

namespace MovieAPI.Data.Repo
{   // BookingRepository
    public class BookingRepository : IBookingRepository
    {
        private readonly AuthenticationDbContext dc;
        public BookingRepository(AuthenticationDbContext dc)
        {
            this.dc = dc;
        }
        public async Task<IEnumerable<Booking>> GetBookingAsync(string userName)
        {
            var bookings = await dc.Booking
                 .Include(p => p.MovieName)
            .Include(p => p.NumberOfSeats)
            .Include(p => p.Time)
            .Include(p => p.MovieDate)
            .Include(p => p.TotalAmount)
            .Where(p => p.UserName == userName)
            .ToListAsync();

            return bookings;
        }
    }
}
