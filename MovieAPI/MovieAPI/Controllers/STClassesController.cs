using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieAPI.Data;
using MovieAPI.Data.Entitis;

namespace MovieAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class STClassesController : ControllerBase
    {
        private readonly AuthenticationDbContext _context;

        public STClassesController(AuthenticationDbContext context)
        {
            _context = context;
        }

        // GET: api/STClasses
        [HttpGet]

        public async Task<ActionResult<IEnumerable<STClass>>> GetshowTimings()
        {
            return await _context.showTimings.ToListAsync();
        }

        // GET: api/STClasses/5
        [HttpGet("{id}")]

        public async Task<ActionResult<STClass>> GetSTClass(int id)
        {


            var sTClass = await _context.showTimings.FindAsync(id);

            if (sTClass == null)
            {
                return NotFound();
            }

            return sTClass;
        }

        // PUT: api/STClasses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSTClass(int id, STClass sTClass)
        {
            if (id != sTClass.Id)
            {
                return BadRequest();
            }

            _context.Entry(sTClass).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!STClassExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/STClasses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<STClass>> PostSTClass(STClass sTClass)
        {
            _context.showTimings.Add(sTClass);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSTClass", new { id = sTClass.Id }, sTClass);
        }

        // DELETE: api/STClasses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSTClass(int id)
        {
            var sTClass = await _context.showTimings.FindAsync(id);
            if (sTClass == null)
            {
                return NotFound();
            }

            _context.showTimings.Remove(sTClass);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool STClassExists(int id)
        {
            return _context.showTimings.Any(e => e.Id == id);
        }
    }
}
