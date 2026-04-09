using API.DbContexts;
using API.DTOs;
using API.Entities;
using AutoMapper;
using AutoMapper.Execution;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class ErpRepository : IErpRepository
    {
        private readonly DbSqliteContext _dbContext;
        private readonly IMapper _mapper;
        private readonly TaskOptimizer _tools;
        public ErpRepository(DbSqliteContext dbContext, IMapper mapper, TaskOptimizer tools) {
            _dbContext = dbContext;
            _mapper = mapper;
            _tools = tools;
        }

        public async Task<Providers> createProvider(ProvidersCreateDTO provider)
        {
            Providers entity = _mapper.Map<Providers>(provider);
            await _dbContext.Providers.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        public async Task<ProductsDefault> createProductPerDefault(ProductCreateDTO product)
        {
            ProductsDefault entity = _mapper.Map<ProductsDefault>(product);
            string savedPath = await _tools.StoreImage(product.image, "Products");
            entity.imgPath = savedPath;
            await _dbContext.ProductsDefaults.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;

        }


        public async Task<List<Invoices>> getInvoicess(bool isOut= true)
        {
            List<Invoices> invoices = 
                await  _dbContext.Invoices
                .Where(inv => inv.isEntry == isOut)
                .Include(inv => inv.provider).ToListAsync();
            return invoices;
        }


        public async Task<Invoices> createInvoice(InvoiceCreateDTO invoice)
        {
            if(invoice.provider_id == 0 && !string.IsNullOrEmpty(invoice.rnc))
            {
                Providers provider = new Providers() { 
                    Name = invoice.name,    
                    rnc = invoice.rnc
                };
                await _dbContext.Providers.AddAsync(provider);
                await _dbContext.SaveChangesAsync();    
                invoice.provider_id = provider.Id;  
            }
            Invoices ent_invoice = _mapper.Map<Invoices>(invoice);
                await _dbContext.Invoices.AddAsync(ent_invoice);
            await _dbContext.SaveChangesAsync();
            return ent_invoice;
        }

        public async Task<Invoices> createOutputInvoice(InvoiceOutCreateDTO invoice)
        {
            Invoices entity = _mapper.Map<Invoices>(invoice);
            await _dbContext.Invoices.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }



        public async Task<List<ProductsRetrieveDTO>> GetProductsDefault()
        {
            List<ProductsDefault> entities = await _dbContext.ProductsDefaults
                .Where(prod => prod.active)
                .Include(prod => prod.subInvoices)
                    .ThenInclude(sub => sub.invoice)
                .ToListAsync();
            List<ProductsRetrieveDTO> dtos = _mapper.Map<List<ProductsRetrieveDTO>>(entities);
            return dtos;
        }

        public async Task<ProductsRetrieveDTO> getProductDefault(int productId)
        {
            var entity = await _dbContext.ProductsDefaults
                .Include(pr => pr.subInvoices)
                    .ThenInclude(pr => pr.invoice)
                .FirstOrDefaultAsync(prod => prod.Id == productId);

            if(entity == null)
            {
                return null;
            }

            var dto = _mapper.Map<ProductsRetrieveDTO>(entity);
            return dto;

        }

        public async Task<int> inhabilitateProduct(int productID)
        {
            var entity = await _dbContext.ProductsDefaults.FirstOrDefaultAsync(prod => prod.Id == productID);
            if(entity == null)
            {
                return 0;
            }
            
            string procesdImgPath = entity.imgPath.Replace("/", "");
            await _tools.deleteImage(procesdImgPath, "Products");
            entity.active = false;
            await _dbContext.SaveChangesAsync();
            return productID;
        }


        public async Task<List<ProvidersRetrieveDTO>> getProviders()
        {
            List<Providers> providers = await _dbContext.Providers.ToListAsync();
            List<ProvidersRetrieveDTO> dtos = _mapper.Map<List<ProvidersRetrieveDTO>>(providers);
            return dtos;
        }

        public async Task<InvoiceIndDTO> getInvoice(int id)
        {
            var invoice = await _dbContext.Invoices
                .Include(inv => inv.provider)
                .Include(inv => inv.subInvoices)
                    .ThenInclude(subInv => subInv.product)
                .FirstOrDefaultAsync(inv => inv.Id == id);
                return _mapper.Map<InvoiceIndDTO>(invoice);
        }
    }
}
