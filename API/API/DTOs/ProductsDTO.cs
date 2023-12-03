using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class ProductsRetrieveDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string imgPath { get; set; } = string.Empty;
        public int quantity_available { get; set; } 
        public decimal price { get; set; }  
    }

    public class ProductCreateDTO
    {
        public string Name { get; set; } = string.Empty;
        [Required]
        public required IFormFile image {get; set;}  
        public decimal price { get; set; }
        public int provider_id { get; set; }

     }
}
