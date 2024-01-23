//C:\Users\Aftab hussain ansari\Desktop\Softcon CRM API Prototype 2\SoftconCRM API\SoftconCRM Api\Data\SoftconClientDataDbContext.cs
using Microsoft.EntityFrameworkCore;
using SoftconCRM_Api.Models;

namespace SoftconCRM_Api.Data
{
    public class SoftconClientDataDbContext : DbContext
    {
        public SoftconClientDataDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<SoftconClientData> SoftconClientsData { get; set;}
    }
}
