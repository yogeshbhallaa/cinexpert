using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Data.Entitis
{
    // Show Time
    public class ShowTime
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string Fare { get; set; }
    }
}
