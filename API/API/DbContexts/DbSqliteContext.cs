using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.DbContexts
{
    public class DbSqliteContext : DbContext
    {
        public DbSqliteContext(DbContextOptions<DbSqliteContext> options):base(options) { }    
        public DbSet<Providers> Providers { get; set; }
        public DbSet<ProductsDefault> ProductsDefaults { get; set; }


    }
}
