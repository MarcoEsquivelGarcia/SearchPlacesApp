using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using SearchPlacesApp.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
namespace SearchPlacesApp.Security
{
    public class SecurityLogin
    {
        private searchplacesContext context = new searchplacesContext();
        public string LoginUser(string username, string password)
        {
            //Get user details for the user who is trying to login
            var user = context.Users.FirstOrDefault(x => x.Username == username && x.Password==password);

            //Authenticate User, Check if it’s a registered user in Database
            if (user == null)
                return null;

            //If it's registered user, check user password stored in Database 
            //For demo, password is not hashed. Simple string comparison 
            //In real, password would be hashed and stored in DB. Before comparing, hash the password
            if (password == user.Password)
            {
                //Authentication successful, Issue Token with user credentials
                //Provide the security key which was given in the JWToken configuration in Startup.cs
                var key = Encoding.ASCII.GetBytes
                          ("YourKey-2374-OFFKDI940NG7:56753253-tyuw-5769-0921-kfirox29zoxv");
                //Generate Token for user 
                var JWToken = new JwtSecurityToken(
                    issuer: "https://localhost:44380/",
                    audience: "https://localhost:44380/",
                    claims: GetUserClaims(user),
                    notBefore: new DateTimeOffset(DateTime.Now).DateTime,
                    expires: new DateTimeOffset(DateTime.Now.AddDays(1)).DateTime,
                    //Using HS256 Algorithm to encrypt Token
                    signingCredentials: new SigningCredentials(new SymmetricSecurityKey(key),
                                        SecurityAlgorithms.HmacSha256Signature)
                );
                var token = new JwtSecurityTokenHandler().WriteToken(JWToken);
                return token;
            }
            else
            {
                return null;
            }
        }
        private IEnumerable<Claim> GetUserClaims(Users user)
        {
            var claims = new List<Claim>
            {

                new Claim("UserName", user.Username),
               new Claim("Password", user.Password)
            };
            return claims;
        }

    }
    
}
