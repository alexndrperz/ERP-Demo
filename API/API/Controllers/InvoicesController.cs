using API.DTOs;
using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("/invoices")]
    public class InvoicesController : Controller
    {
        private readonly IErpRepository _erpRepository;
        public InvoicesController(IErpRepository erpRepository)         {
            _erpRepository = erpRepository;
        }

        [HttpPost] 
        public async  Task<ActionResult> createBigInvoice(InvoiceCreateDTO invoice)
        {
            return Ok();
        }

    }
}
