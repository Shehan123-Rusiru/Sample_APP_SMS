
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class RegisterService 
    {
        private readonly IMongoCollection<RegisterUserMongo>  mongoCollection;
        private readonly IMongoCollection<RegisterUserMongo1> mongoCollection1;


        public RegisterService(
            IOptions<DatabaseSettings> dabaseSettings)
        {
            var mongoClient = new MongoClient(dabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(dabaseSettings.Value.DatabaseName);

            mongoCollection = mongoDatabase.GetCollection<RegisterUserMongo>(
             dabaseSettings.Value.RegisterCollectionName);

            mongoCollection1 = mongoDatabase.GetCollection<RegisterUserMongo1>(
             dabaseSettings.Value.RegisterCollectionName1);
        }

        public async Task CreateAsync(RegisterUserMongo newregisterUser) =>
          await mongoCollection.InsertOneAsync(newregisterUser);
        public async Task CreateAsync(RegisterUserMongo1 newregisterUser1) =>
      await mongoCollection1.InsertOneAsync(newregisterUser1);



    }







}



