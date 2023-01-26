using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using WebApplication1.Models;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterUser : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public RegisterUser(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpPost]
        public JsonResult Post(UserDetails em)
        {
            string query = @"Insert Into dbo.RegisterUser values ('" + em.firstName + "','" + em.lastName + "','" + em.username + "','" + em.password + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SampleAppCon");
            SqlDataReader myReader;
            using (SqlConnection myconnection = new SqlConnection(sqlDataSource))
            {
                myconnection.Open();
                using (SqlCommand mycommand = new SqlCommand(query, myconnection))
                {

                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myconnection.Close();

                }
            }
            return new JsonResult("Added Successfuly");
        }
        
    }
}
