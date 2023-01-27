namespace WebApplication1.Models
{
    public class DatabaseSettings
    {
       // public static object Value { get; internal set; }
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string RegisterCollectionName { get; set; } = null!;
    }
}
