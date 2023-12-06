using API.Entities;

namespace API.DTOs
{

    public class InvoiceCreateDTO
    {
        public int provider_id { get; set; }
        public string rnc { get; set; }
        public string name { get; set; }
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
        public List<SubInvoiceCreateDTO> subInvoices { get; set; }
    }

    public class InvoiceOutCreateDTO
    {
        public bool fiscalComp { get; set; }
        public bool isEntry { get; set; } = false;
        public decimal subtotal { get; set; }
        public decimal total { get; set; }
        public List<SubInvoiceCreateDTO> subInvoices { get; set; }

    }
    
    public class InvoiceNestedDTO { 
    
        public int Id { get; set; }
        public bool isEntry { get; set; } 
        public DateTime created_At { get; set; }
    }

    public class InvoiceIndDTO {
        public int Id { get; set; }
        public Providers provider { get; set; }
        public DateTime created_At { get; set; }  
        public decimal subtotal { get; set; }   
        public decimal total { get; set; }
        public List<SubInvoiceRetrieveDTO> subInvoices { get; set; }
    
    }

}
