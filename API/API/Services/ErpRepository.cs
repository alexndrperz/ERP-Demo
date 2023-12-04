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
            foreach(SubInvoiceCreateDTO subInvoice in invoice.subInvoices)
            {
                SubInvoices ent_subInvoice = _mapper.Map<SubInvoices>(subInvoice);
                ent_subInvoice.invoice_id = ent_invoice.Id;
                await _dbContext.SubInvoices.AddAsync(ent_subInvoice);
            }
            await _dbContext.SaveChangesAsync();
            return ent_invoice;
        }




        public async Task<List<ProductsRetrieveDTO>> GetProductsDefault()
        {
            List<ProductsDefault> entities = await _dbContext.ProductsDefaults
                .Where(prod => prod.active)
                .ToListAsync();
            List<ProductsRetrieveDTO> dtos = _mapper.Map<List<ProductsRetrieveDTO>>(entities);
            return dtos;
        }

        public async Task<ProductsDefault> getProductDefault(int productId)
        {
            var entity = await _dbContext.ProductsDefaults.FirstOrDefaultAsync(prod => prod.Id == productId);
            if(entity == null)
            {
                return null;
            }
            return entity;

        }

        public async Task<int> inhabilitateProduct(int productID)
        {
            var entity = await getProductDefault(productID);
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
    }
}
