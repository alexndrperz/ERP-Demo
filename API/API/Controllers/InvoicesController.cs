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
        public InvoicesController(IErpRepository erpRepository)
        {
            _erpRepository = erpRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Invoices>>> getInitialInvoices()
        {
            return Ok(await _erpRepository.getInvoicess(true));

        }

        [HttpGet("{invoice_id}")]
        public async Task<ActionResult<InvoiceIndDTO>> getInvoice(int invoice_id)
        {
            var invoice = await _erpRepository.getInvoice(invoice_id);
            if(invoice == null)
            {
                return NotFound();
            }
            return invoice;

        }

        [HttpPost]          
        public async  Task<ActionResult> createBigInvoice([FromBody] InvoiceCreateDTO invoice)
        {
            await _erpRepository.createInvoice(invoice);
            return Ok(new {msg = "Creado con exito"});
        }

        [HttpPost("out")]
        public async Task<ActionResult> createBigOutInvoice([FromBody] InvoiceOutCreateDTO invoice)
        {
            await _erpRepository.createOutputInvoice(invoice);
            return Ok(new { msg = "Creado con exito" });
        }

        [HttpGet("out")]
        public async Task<ActionResult> getOutInvoices()
        {
            return Ok(await _erpRepository.getInvoicess(false));
        }
    }
}
