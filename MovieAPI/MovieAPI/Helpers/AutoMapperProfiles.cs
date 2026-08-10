using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MovieAPI.Data.Entitis;
using MovieAPI.Dtos;

namespace MovieAPI.Helpers
{   // Auto Mapper Profile
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Booking, BookingDto>().ReverseMap();
        }

    }
}
