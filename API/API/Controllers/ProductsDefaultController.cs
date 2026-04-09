using API.DTOs;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace API.Controllers
{
    [Route("/products")]
    public class ProductsDefaultController : Controller
    {

        private readonly TaskOptimizer _tools;
        public ProductsDefaultController(IErpRepository dbServices, TaskOptimizer tools) {
            _dbServices = dbServices;
            _tools = tools;
        }

        private readonly IErpRepository _dbServices;
        [HttpGet]
        public async Task<ActionResult<List<ProductsRetrieveDTO>>> getAllProductsPerDefault()
        {
            return Ok(await _dbServices.GetProductsDefault());
        }



        [HttpGet("{productId}")]
        public async Task<ActionResult> getProduct(int productId)
        {
            var entity = await _dbServices.getProductDefault(productId);
            if (entity == null)
            {
                return NotFound();
            }
            return Ok(entity);
        }

        [HttpGet("images/{productImg}")]
        public async Task<ActionResult> getProductImgPath(string productImg)
        {

            string fullPathImg = _tools.getFullPathImage(productImg, "Products");
            return PhysicalFile(fullPathImg, "image/jpg");
        }

        [HttpPost]
        public async Task<ActionResult> createProductDefault([FromForm] ProductCreateDTO product)
        {
            return Ok(await _dbServices.createProductPerDefault(product));
        }

        [HttpDelete("{productID}")]
        public async Task<ActionResult> deshabilitateProductDefault(int productID)
        {
            int result = await _dbServices.inhabilitateProduct(productID);
            if(result == 0)
            {
                return NotFound();
            }
            
            return NoContent();

        }




        
    }
}
