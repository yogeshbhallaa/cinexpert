using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Data.Repo
{
    // IUnitOfWork
    public interface IUnitOfWork
    {
        IBookingRepository BookingRepository { get; }
    }
}
