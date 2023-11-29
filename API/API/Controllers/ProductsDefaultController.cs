using API.DTOs;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("/products")]    
    public class ProductsDefaultController : Controller 
    {
        public ProductsDefaultController(IErpRepository dbServices) { 
            _dbServices = dbServices;
        } 

        private readonly IErpRepository _dbServices;
        [HttpGet]
        public async Task<ActionResult<List<ProductsRetrieveDTO>>> getAllProductsPerDefault()
        {
            return await _dbServices.GetProductsDefault();
        }
        [HttpPost]        

        
    }
}
