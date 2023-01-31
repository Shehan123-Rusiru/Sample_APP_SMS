using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;


namespace WebApplication1.Models

{
    public class RegisterUserMongo1
    {
        [BsonElement("Name")]
        public string firstname { get; set; } = null!;

        public string lastname { get; set; } = null!;

        public string gender { get; set; } = null!;

        public bool isToc { get; set; }

        public string email { get; set; } = null!;


        public string country { get; set; } = null!;




    }
}
