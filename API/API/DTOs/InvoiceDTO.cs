namespace API.DTOs
{
    public class InvoiceCreateDTO
    {
        public int provider_id { get; set; }
        public string rnc { get; set; } 
        public string name { get; set; }
        public List<SubInvoiceCreateDTO> subInvoices { get; set; }  
    }
}
