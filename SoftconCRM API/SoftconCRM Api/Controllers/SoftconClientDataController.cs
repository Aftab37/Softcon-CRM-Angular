using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SoftconCRM_Api.Data;

namespace SoftconCRM_Api.Controllers
{

    #region getallclientdata
    /// <summary>
    /// For client data list -
    /// Aftab Ansari - 6/1/24 Time : 5:30pm
    /// </summary>

    [ApiController]
    [Route("api/[Controller]")]
    public class SoftconClientDataController : Controller
    {
        private readonly SoftconClientDataDbContext _SoftconClientDataDbContext;

        public SoftconClientDataController(SoftconClientDataDbContext softconClientDataDbContext)
        {
            _SoftconClientDataDbContext = softconClientDataDbContext;
        }   

        [HttpGet]
        public async Task<IActionResult> GetAllClientData()
        {
            var ClientData = await _SoftconClientDataDbContext.SoftconClientsData.Take(10).ToListAsync();
            return Ok(ClientData);
        }

    }
}
#endregion

