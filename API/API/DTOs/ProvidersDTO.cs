namespace API.DTOs
{
    public class ProvidersRetrieveDTO
    {
        public int Id { get; set; }
        public string rnc { get; set; }         
        public string Name { get; set; }
    }

    public class ProvidersCreateDTO
    {
        public string rnc { get; set; } 
        public string Name { get; set; }
    }
}
