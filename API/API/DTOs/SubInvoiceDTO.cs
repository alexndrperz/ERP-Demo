namespace API.DTOs
{
    public class SubInvoiceCreateDTO
    {
        public int product_id { get; set; }
        public int quantity { get; set; }
        public bool hasItbis { get; set; } = false;
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
    }
}
