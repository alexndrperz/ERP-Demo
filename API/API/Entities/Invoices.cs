using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Invoices
    {
        public int Id { get; set; }
        public DateTime created_At { get; set; } = DateTime.Now;
        [ForeignKey("provider_id")]
        public Providers? provider { get; set; }
        public int? provider_id { get; set; }

        public bool isEntry { get; set; } = true; 
        public decimal subtotal { get; set; }
        public decimal total { get; set; }

        public bool fiscalComp { get; set; }
        public ICollection<SubInvoices> subInvoices { get; set; } 
    }
}