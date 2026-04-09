using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Profiles
{
    public class InvoicesProfile: Profile
    {
        public InvoicesProfile()
        {
            CreateMap<InvoiceCreateDTO, Invoices>();
            CreateMap<InvoiceOutCreateDTO, Invoices>();
            CreateMap<Invoices, InvoiceIndDTO>();
            CreateMap<Invoices, InvoiceNestedDTO>();
        }
    }
}
