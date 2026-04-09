using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace API.DTOs
{
    public class ProductsRetrieveDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string imgPath { get; set; } = string.Empty;
        public int quantity_availables {
            get
            {
                if (subInvoices != null && subInvoices.Any())
                {
                    var entries =  subInvoices.Where(sub => sub.invoice.isEntry).Sum(sub => sub.quantity);
                    var outs =  subInvoices.Where(sub => sub.invoice.isEntry==false).Sum(sub => sub.quantity);
                    return entries - outs;

                }
                else
                {
                    return 0;
                }
            }
        } 
        public decimal percentage_sell   { get; set; }
        public decimal avg_bills
        {
            get
            {
                if (subInvoices != null && subInvoices.Any())
                {
                    return subInvoices.Where(sub => sub.invoice.isEntry). Average(sub => sub.total );
                }
                else
                {
                    return 0; 
                }
            }
        }

        public decimal total_gains
        {
            get
            {
                if (subInvoices != null && subInvoices.Any())
                {
                    return subInvoices.Where(sub => sub.invoice.isEntry==false).Sum(sub => sub.total);
                }
                else
                {
                    return 0;
                }
            }
        }

        public List<SubInvoiceNestedDTO> subInvoices { get; set; }
    }


     public class ProductOutNestedDTO {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string imgPath { get; set; } = string.Empty;
        public List<SubInvoiceNestedDTO> subInvoices { get; set; }

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
