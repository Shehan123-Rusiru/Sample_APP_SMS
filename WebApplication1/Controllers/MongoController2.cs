using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MongoController2 : Controller
    {
        private readonly RegisterService _registerService1;


        public MongoController2(RegisterService registerService1) => _registerService1 = registerService1;
        [HttpPost]
        public async Task<IActionResult> Post(RegisterUserMongo1 newregisterUser1)
        {
            await _registerService1.CreateAsync(newregisterUser1);

            return new JsonResult("Record Added Successfuly To MongoDB");
        }
    }
}



