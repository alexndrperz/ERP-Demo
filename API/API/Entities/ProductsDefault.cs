using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class ProductsDefault
    {
        public int Id { get; set; }    
        public string Name { get; set; }
        public decimal percentage_sell { get; set; } = 30;
        public bool active { get; set; } = true;
        public int quantity_available { get; set; } = 0;
        public string imgPath { get; set; } 

        public ICollection<SubInvoices> subInvoices { get; set; }   

    }
}
