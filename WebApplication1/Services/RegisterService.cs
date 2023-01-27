
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class RegisterService 
    {
        private readonly IMongoCollection<RegisterUserMongo>  mongoCollection;

        public RegisterService(
            IOptions<DatabaseSettings> dabaseSettings)
        {
            var mongoClient = new MongoClient(dabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(dabaseSettings.Value.DatabaseName);

            mongoCollection = mongoDatabase.GetCollection<RegisterUserMongo>(
             dabaseSettings.Value.RegisterCollectionName);
        }

        public async Task CreateAsync(RegisterUserMongo newregisterUser) =>
          await mongoCollection.InsertOneAsync(newregisterUser);


    }
}
