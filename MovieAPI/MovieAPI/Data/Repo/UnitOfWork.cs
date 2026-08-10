using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Data.Repo
{
    // UnitOfWork
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AuthenticationDbContext dc;
        public UnitOfWork(AuthenticationDbContext dc)
        {
            this.dc = dc;
        }
        public IBookingRepository BookingRepository => new BookingRepository(dc);
        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync() > 0;
        }
    }
}
