using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class ProductsDefault
    {
        public int Id { get; set; }    
        public string Name { get; set; }        
        public decimal price { get; set; }
        public string imgPath { get; set; } 

        [ForeignKey("provider_id")]
        public Providers provider { get; set; }
        public int provider_id { get; set; }

    }
}
