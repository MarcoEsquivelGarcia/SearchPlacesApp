using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SearchPlacesApp.Models;
using SearchPlacesApp.Security;

namespace SearchPlacesApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class PlacesController : ControllerBase
    {
        private readonly searchplacesContext context = new searchplacesContext();
        // GET api/places
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var catego = from cat in context.Category
                         select cat;
            return Ok(catego.ToList());
        }
        
        [HttpGet("{GetFiltered}")]
        public async Task<IActionResult> GetFiltered([FromQuery] filterestablishments request)
        {
            //var sesion = HttpContext.Session.GetString("JWToken");
            //if (sesion != null)
            //{
                var catego = from cat in context.Category
                             join e in context.Establishment on cat.Id equals e.IdCategory
                             where cat.CategoryType.Contains(request.CategoryType) && e.Distancia <= Convert.ToInt32(request.Distancia)
                             select e;
                return Ok(catego.ToList());
            //}
            //else
            //{
            //    return Unauthorized();
            //}


        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
