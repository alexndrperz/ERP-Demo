using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Profiles
{
    public class ProvidersProfile : Profile
    {
        public ProvidersProfile() {
            CreateMap<Providers, ProvidersRetrieveDTO>();
            CreateMap<ProvidersCreateDTO, Providers>();
        
        }    
        
    }
}
