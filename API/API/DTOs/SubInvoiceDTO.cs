namespace API.DTOs
{

    public class SubInvoiceRetrieveDTO
    {
        public int Id { get; set; }
        public ProductOutNestedDTO product { get; set; }
        public decimal price_unit { get; set; } 
        public int quantity { get; set; }   
        public decimal subtotal { get; set; }
        public decimal total{ get; set; }

    }

    public class SubInvoiceNestedDTO
    {
        public int Id { get; set; }
        public InvoiceNestedDTO invoice { get; set; }   
        public decimal price_unit { get; set; }
        public int quantity { get; set; }
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
    }
 
    public class SubInvoiceCreateDTO
    {
        public int product_id { get; set; }
        public int quantity { get; set; }
        public decimal price_unit { get; set; }
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
    }
}
