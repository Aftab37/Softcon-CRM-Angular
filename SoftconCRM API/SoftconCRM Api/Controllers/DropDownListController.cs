using Microsoft.AspNetCore.Mvc;
using SoftconCRM_Api.Data;
using Microsoft.EntityFrameworkCore;

namespace SoftconCRM_Api.Controllers
{
    #region DropDownList Controller
    /// <summary>
    /// APIs for all the dropdown list
    /// Aftab Ansari - 08/01/24 Time : 11:00 pm
    /// </summary>

    public class DropDownListController : Controller
    {
        private readonly SoftconClientDataDbContext _SoftconClientDataDbContext;

        public DropDownListController(SoftconClientDataDbContext softconClientDataDbContext)
        {
            _SoftconClientDataDbContext = softconClientDataDbContext;
        }

        #region API for Group
        /// <summary>
        /// This API returns all the distinct Group names in the database.
        /// </summary>
        [HttpGet("api/GetGroups")]
        public async Task<IActionResult> GetGroups()
        {
            // Query for distinct Group names, handling potential null values
            var distinctCities = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(g => g.Type)
                .Distinct()
                .Where(type => type != null)
                .OrderBy(type => type)
                .ToListAsync();

            return Ok(distinctCities);
        }
        #endregion

        #region API of GetCities
        /// <summary>
        /// This API returns all the distinct city names in the database.
        /// </summary>
        [HttpGet("api/GetCities")]
        public async Task<IActionResult> GetCities()
        {
            // Query for distinct city names, handling potential null values
            var distinctCities = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(c => c.City)
                .Distinct()
                .Where(city => city != null)
                .OrderBy(city => city)
                .ToListAsync();

            return Ok(distinctCities);
        }
        #endregion

        #region API of GetStates
        /// <summary>
        /// This API returns all the distinct states names in the database.
        /// </summary>
        [HttpGet("api/GetStates")]
        public async Task<IActionResult> GetStates()
        {
            // Query for distinct city names, handling potential null values
            var distinctStates = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(s => s.State)
                .Distinct()
                .Where(state => state != null)
                .OrderBy(state => state)
                .ToListAsync();

            return Ok(distinctStates);
        }
        #endregion

        #region API for GetZones
        /// <summary>
        /// This API returns all the distinct zone names in the database.
        /// </summary>
        [HttpGet("api/GetZones")]
        public async Task<IActionResult> GetZones()
        {
            // Query for distinct zones names, handling potential null values
            var distinctZones = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(z => z.Zone)
                .Distinct()
                .Where(zone => zone != null)
                .OrderBy(zone => zone)
                .ToListAsync();

            return Ok(distinctZones);
        }
        #endregion

        #region API for GetArea
        /// <summary>
        /// This API returns all the distinct Area names in the database.
        /// </summary>
        [HttpGet("api/GetArea")]
        public async Task<IActionResult> GetArea()
        {
            // Query for distinct zones names, handling potential null values
            var distinctArea = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(a => a.Area)
                .Distinct()
                .Where(area => area != null)
                .OrderBy(area => area)
                .ToListAsync();

            return Ok(distinctArea);
        }
        #endregion

        #region API for SourceName
        /// <summary>
        /// This API returns all the distinct Source names in the database.
        /// </summary>
        [HttpGet("api/GetClientName")]
        public async Task<IActionResult> ClientName()
        {
            // Query for distinct zones names, handling potential null values
            var distinctSourceName= await _SoftconClientDataDbContext.SoftconClientsData
                .Select(s => s.ClientName)
                .Distinct()
                .Where(clientName => clientName != null)
                .OrderBy(clientName => clientName)
                .ToListAsync();

            return Ok(distinctSourceName);
        }
        #endregion

        #region API for CustomerName
        /// <summary>
        /// This API returns all the distinct Source names in the database.
        /// </summary>
        [HttpGet("api/GetCustomerName")]
        public async Task<IActionResult> CustomerName()
        {
            // Query for distinct zones names, handling potential null values
            var distinctCustomerName = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(c => c.CustomerName)
                .Distinct()
                .Where(customerName =>  customerName != null)
                .OrderBy(customerName => customerName)
                .Take(10)
                .ToListAsync();

            return Ok(distinctCustomerName);
        }
        #endregion

        

    }
    #endregion
}
