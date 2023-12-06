using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Profiles
{
    public class SubInvoicesProfile :Profile
    {
        public SubInvoicesProfile() {
            CreateMap<SubInvoiceCreateDTO, SubInvoices>();
            CreateMap<SubInvoices, SubInvoiceRetrieveDTO>();
            CreateMap<SubInvoices, SubInvoiceNestedDTO>();
            
        } 
    }
}
