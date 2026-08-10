using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Dtos
{
    // BookingDto
    public class BookingDto
    {
        public int MovieId { get; set; }
        public string UserName { get; set; }
        public string MovieName { get; set; }
        public int NumberOfSeats { get; set; }
        public int TotalAmount { get; set; }
        public string MovieDate { get; set; }
        public string Time { get; set; }

    }
}
