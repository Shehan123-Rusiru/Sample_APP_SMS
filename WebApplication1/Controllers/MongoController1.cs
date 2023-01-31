using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MongoController1 : ControllerBase
    {
        private readonly RegisterService _registerService;

        public MongoController1(RegisterService registerService) => _registerService = registerService;

        [HttpPost]
        public async Task<IActionResult> Post(RegisterUserMongo newregisterUser)
        {
            await _registerService.CreateAsync(newregisterUser);

           return new JsonResult("Record Added Successfuly To MongoDB");
        }

    }
}
