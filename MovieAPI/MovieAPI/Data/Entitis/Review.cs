using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Data.Entitis
{
    public class Review
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string MovieName { get; set; }
        public string Comments { get; set; }

    }
}
