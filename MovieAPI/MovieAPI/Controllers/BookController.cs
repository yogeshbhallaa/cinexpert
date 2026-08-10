using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieAPI.Data.Entitis;
using MovieAPI.Data.Repo;
using MovieAPI.Dtos;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;

        public BookController(IUnitOfWork uow, IMapper mapper)
        {
            this.uow = uow;
            this.mapper = mapper;

        }

        //book/detail/himanshu123
        [HttpGet("detail/{userName}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetPropertyDetail(string userName)
        {
            var booking = await uow.BookingRepository.GetBookingAsync(userName);
            var bookingDTO = mapper.Map<BookingDto>(booking);
            return Ok(bookingDTO);
        }


        //property/add
        //[HttpPost("add")]
        //[Authorize]
        //public async Task<IActionResult> AddBooking(BookingDto bookingDto)
        //{
        //    var property = mapper.Map<Booking>(bookingDto);
        //    var userId = GetUserId();
        //    property.PostedBy = userId;
        //    property.LastUpdatedBy = userId;
        //    uow.PropertyRepository.AddProperty(property);
        //    await uow.SaveAsync();
        //    return StatusCode(201);
        //}

    }
}
