using API.DTOs;
using API.Entities;
using System.Security.Cryptography.X509Certificates;

namespace API.Services
{
    public interface IErpRepository
    {
        public Task<List<ProductsRetrieveDTO>> GetProductsDefault();
        public Task<ProductsDefault> createProductPerDefault(ProductCreateDTO product);

        public Task<ProductsDefault> getProductDefault(int productId);
        public Task<int> inhabilitateProduct(int productID);

        public Task<List<ProvidersRetrieveDTO>> getProviders();
        public Task<Providers> createProvider(ProvidersCreateDTO provider); 
    }
}
