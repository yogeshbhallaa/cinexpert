using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieAPI.Data.Entitis;

namespace MovieAPI.Data.Repo
{
    // IBookingRepository
    public interface IBookingRepository
    {
        Task<IEnumerable<Booking>> GetBookingAsync(string userName);
    }
}
