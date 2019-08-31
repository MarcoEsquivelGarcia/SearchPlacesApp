using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SearchPlacesApp.Models;
using SearchPlacesApp.Security;

namespace SearchPlacesApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class LoginController : ControllerBase
    {
        [EnableCors("CorsPolicy")]
        [HttpPost]
        public async Task<IActionResult> VerifyToken(Users users)
        {

            SecurityLogin _tokenProvider = new SecurityLogin();
            //Authenticate user
           
            var userToken = _tokenProvider.LoginUser(users.Username.Trim(), users.Password.Trim());
            if (userToken != null)
            {
                //Save token in session object
                HttpContext.Session.SetString("JWToken", userToken);
                
                return Ok();
            }
            else
                return Unauthorized();
        }
    }
}
