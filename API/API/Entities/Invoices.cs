using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Invoices
    {
        public int Id { get; set; }
        public DateTime created_At { get; set; } = DateTime.Now;
        [ForeignKey("provider_id")]
        public Providers provider { get; set; }
        public int provider_id { get; set; }
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
    }
}