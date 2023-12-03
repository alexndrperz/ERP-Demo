using API.DTOs;
using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("/providers")]
    public class ProvidersController : Controller
    {
        private readonly IErpRepository _dbServices;
        public ProvidersController(IErpRepository dbServices) { 
            _dbServices = dbServices;   
        }

        [HttpGet]   
        public async Task<ActionResult<List<ProvidersRetrieveDTO>>> getAllProviders()
        {
            return Ok(await _dbServices.getProviders());
        }

        [HttpPost]
        public async Task<ActionResult<Providers>> createProvider([FromBody] ProvidersCreateDTO provider)
        {
            return Ok(await _dbServices.createProvider(provider));
        }
    }
}
