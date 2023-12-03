using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class SubInvoices
    {
        public int Id { get; set; }
        [ForeignKey("invoice_id")]
        public Invoices invoice { get; set; }
        public int invoice_id { get; set; }
        [ForeignKey("product_id")]
        public ProductsDefault product { get; set; }
        public int product_id { get; set; }
        public int quantity { get; set; }
        public bool hasItbis { get; set; } = false;
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
    }
}
