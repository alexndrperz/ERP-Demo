using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Profiles
{
    public class ProductsDefaultProfile : Profile
    {
        public ProductsDefaultProfile() {
            CreateMap<ProductsDefault, ProductsRetrieveDTO>();
            CreateMap<ProductCreateDTO, ProductsDefault>();
        
        }    
        
    }
}
