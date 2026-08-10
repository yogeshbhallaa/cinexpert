using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Data.Entitis
{
    // Movie
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string MovieType { get; set; }
        public string MovieDescription { get; set; }
        public string Rating { get; set; }
        public string Length { get; set; }
        public string Language { get; set; }
        public string DirectedBY { get; set; }
        public string ReleaseDate { get; set; }
        public string Category { get; set; }


        public string EstPossessionOn { get; set; }
        public string Image { get; set; }


    }
}
