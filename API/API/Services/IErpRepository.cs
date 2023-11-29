using API.DTOs;
using System.Security.Cryptography.X509Certificates;

namespace API.Services
{
    public interface IErpRepository
    {
        public Task<List<ProductsRetrieveDTO>> GetProductsDefault(); 
    }
}
