using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApplication1.Models

{
    public class RegisterUserMongo
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonElement("Name")]
        public string firstName { get; set; } = null!;

        public string lastname { get; set; } = null!;

        public string username { get; set; } = null!;

        public string password { get; set; } = null!;

    }
}
