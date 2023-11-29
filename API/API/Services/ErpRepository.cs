using API.DbContexts;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace API.Services
{
    public class ErpRepository : IErpRepository
    {
        private readonly DbSqliteContext _dbContext;
        private readonly IMapper _mapper;
        public ErpRepository(DbSqliteContext dbContext, IMapper mapper) { 
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public async Task<List<ProductsRetrieveDTO>> GetProductsDefault()
        {
            List<ProductsDefault> entities = await _dbContext.ProductsDefaults.ToListAsync();   
            List<ProductsRetrieveDTO> dtos = _mapper.Map<List<ProductsRetrieveDTO>>(entities);
            return dtos;
        }

    }
}
