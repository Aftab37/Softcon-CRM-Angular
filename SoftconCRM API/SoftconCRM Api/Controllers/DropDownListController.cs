//Softcon CRM API Prototype 2\SoftconCRM API\SoftconCRM Api\Controllers\DropDownListController.cs

using Microsoft.AspNetCore.Mvc;
using SoftconCRM_Api.Data;
using Microsoft.EntityFrameworkCore;
using SoftconCRM_Api.Models;

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

        //#region API for Group
        ///// <summary>
        ///// This API returns all the distinct Group names in the database.
        ///// </summary>
        //[HttpGet("api/GetGroups")]
        //public async Task<IActionResult> GetGroups()
        //{
        //    // Query for distinct Group names, handling potential null values
        //    var distinctCities = await _SoftconClientDataDbContext.SoftconClientsData
        //    .Select(g => g.Type)
        //    .Distinct()
        //    .Where(type => type != null)
        //    .OrderBy(type => type)
        //    .Take(100)
        //    .ToListAsync();

        //    return Ok(distinctCities);
        //}
        //#endregion

        [HttpPost("api/GetGroups")]
        public async Task<IActionResult> GetGroups([FromBody] SearchInputs GroupSearchInput)
        {
            // Check if searchInput is provided
            if (string.IsNullOrEmpty(GroupSearchInput.SearchLetters))
            {
                // If searchInput is empty, return all distinct Group names
                var distinctCities = await _SoftconClientDataDbContext.SoftconClientsData
                    .Select(g => g.Type)
                    .Distinct()
                    .Where(type => type != null)
                    .OrderBy(type => type)
                    .Take(100)
                    .ToListAsync();

                return Ok(distinctCities);
            }
            else
            {
                // If searchInput is provided, filter records based on the searchInput
                var filteredCities = await _SoftconClientDataDbContext.SoftconClientsData
                    .Where(g => g.Type != null && g.Type.Contains(GroupSearchInput.SearchLetters))
                    .Select(g => g.Type)
                    .Distinct()
                    .OrderBy(type => type)
                    .Take(100)
                    .ToListAsync();

                return Ok(filteredCities);
            }
        }

        #region API for SourceName
        /// <summary>
        /// This API returns all the distinct Source names in the database.
        /// </summary>
        [HttpPost("api/GetSourceNames")]
        public async Task<IActionResult> ClientName([FromBody] SearchInputs SourceNameSearchInput)
        {
            // Check if searchInput is provided
            if (string.IsNullOrEmpty(SourceNameSearchInput.SearchLetters))
            {
                // If searchInput is empty, return all distinct Group names
                // Query for distinct zones names, handling potential null values
                var distinctSourceName = await _SoftconClientDataDbContext.SoftconClientsData
                    .Select(s => s.ClientName)
                    .Distinct()
                    .Where(clientName => clientName != null)
                    .OrderBy(clientName => clientName)
                    .Take(100)
                    .ToListAsync();

                return Ok(distinctSourceName);
            }
            else
            {
                // If searchInput is provided, filter records based on the searchInput
                var filteredSourceNames = await _SoftconClientDataDbContext.SoftconClientsData
                    .Where(s => s.ClientName != null && s.ClientName.Contains(SourceNameSearchInput.SearchLetters))
                    .Select(s => s.ClientName)
                    .Distinct()
                    .OrderBy(clientName=> clientName)
                    .Take(100)
                    .ToListAsync();

                return Ok(filteredSourceNames);
            }

            //// Query for distinct zones names, handling potential null values
            //var distinctSourceName = await _SoftconClientDataDbContext.SoftconClientsData
            //    .Select(s => s.ClientName)
            //    .Distinct()
            //    .Where(clientName => clientName != null)
            //    .OrderBy(clientName => clientName)
            //    .Take(100)
            //    .ToListAsync();

            //return Ok(distinctSourceName);
        }
        #endregion

        #region API of GetCities
        /// <summary>
        /// This API returns all the distinct city names in the database.
        /// </summary>
        [HttpPost("api/GetCities")]
        public async Task<IActionResult> GetCities([FromBody] SearchInputs CitiesSearchInput)
        {
            // Check if searchInput is provided
            if (string.IsNullOrEmpty(CitiesSearchInput.SearchLetters))
            {
                // If searchInput is empty, return all distinct Group names
                // Query for distinct city names, handling potential null values
                var distinctCities = await _SoftconClientDataDbContext.SoftconClientsData
               .Select(c => c.City)
               .Distinct()
               .Where(city => city != null)
               .OrderBy(city => city)
               .Take(100)
               .ToListAsync();

                return Ok(distinctCities);
            }
            else
            {
                // If searchInput is provided, filter records based on the searchInput
                var filteredCities = await _SoftconClientDataDbContext.SoftconClientsData
                    .Where(c => c.City != null && c.City.Contains(CitiesSearchInput.SearchLetters))
                    .Select(c => c.City)
                    .Distinct()
                    .OrderBy(city => city)
                    .Take(100)
                    .ToListAsync();

                return Ok(filteredCities);
            }
                
        }
        #endregion

        #region API of GetStates
        /// <summary>
        /// This API returns all the distinct states names in the database.
        /// </summary>
        [HttpPost("api/GetStates")]
        public async Task<IActionResult> GetStates([FromBody] SearchInputs StatesSearchInput)
        {
            // Check if searchInput is provided
            if (string.IsNullOrEmpty(StatesSearchInput.SearchLetters))
            {
                // Query for distinct city names, handling potential null values
                var distinctStates = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(s => s.State)
                .Distinct()
                .Where(state => state != null)
                .OrderBy(state => state)
                .Take(100)
                .ToListAsync();

                return Ok(distinctStates);
            }
            else
            {
                // If searchInput is provided, filter records based on the searchInput
                var filteredStates = await _SoftconClientDataDbContext.SoftconClientsData
                    .Where(s => s.State != null && s.State.Contains(StatesSearchInput.SearchLetters))
                    .Select(s => s.State)
                    .Distinct()
                    .OrderBy(state => state)
                    .Take(100)
                    .ToListAsync();

                return Ok(filteredStates);

            }
  
        }
        #endregion

        #region API for GetZones
        /// <summary>
        /// This API returns all the distinct zone names in the database.
        /// </summary>
        [HttpPost("api/GetZones")]
        public async Task<IActionResult> GetZones([FromBody] SearchInputs ZoneSearchInput)
        {

            // Check if searchInput is provided
            if (string.IsNullOrEmpty(ZoneSearchInput.SearchLetters))
            {
                // Query for distinct zones names, handling potential null values
                var distinctZones = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(z => z.Zone)
                .Distinct()
                .Where(zone => zone != null)
                .OrderBy(zone => zone)
                .Take(100)
                .ToListAsync();

                return Ok(distinctZones);

            }
            else
            {
                // If searchInput is provided, filter records based on the searchInput
                var filteredZone = await _SoftconClientDataDbContext.SoftconClientsData
                    .Where(z => z.Zone != null && z.Zone.Contains(ZoneSearchInput.SearchLetters))
                    .Select(z => z.Zone)
                    .Distinct()
                    .OrderBy(zone => zone)
                    .Take(100)
                    .ToListAsync();

                return Ok(filteredZone);
            }
      
        }
        #endregion

        #region API for GetArea
        /// <summary>
        /// This API returns all the distinct Area names in the database.
        /// </summary>
        [HttpPost("api/GetArea")]
        public async Task<IActionResult> GetArea([FromBody] SearchInputs AreaSearchInput)
        {
            // Check if searchInput is provided
            if (string.IsNullOrEmpty(AreaSearchInput.SearchLetters))
            {
                // Query for distinct zones names, handling potential null values
                var distinctArea = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(a => a.Area)
                .Distinct()
                .Where(area => area != null)
                .OrderBy(area => area)
                .Take(100)
                .ToListAsync();

                return Ok(distinctArea);
            }
            else
            {
                // If searchInput is provided, filter records based on the searchInput
                var filteredArea = await _SoftconClientDataDbContext.SoftconClientsData
                    .Where(a => a.Area != null && a.Area.Contains(AreaSearchInput.SearchLetters))
                    .Select(z => z.Area)
                    .Distinct()
                    .OrderBy(area => area)
                    .Take(100)
                    .ToListAsync();

                return Ok(filteredArea);
            }
 
        }
        #endregion



        #region API for CustomerName
        /// <summary>
        /// This API returns all the distinct Source names in the database.
        /// </summary>
        [HttpPost("api/GetCustomerName")]
        public async Task<IActionResult> CustomerName([FromBody] SearchInputs NameSearchInput)
        {
            // Check if searchInput is provided
            if (string.IsNullOrEmpty(NameSearchInput.SearchLetters))
            {
                // Query for distinct zones names, handling potential null values
                var distinctCustomerName = await _SoftconClientDataDbContext.SoftconClientsData
                .Select(c => c.CustomerName)
                .Distinct()
                .Where(customerName => customerName != null)
                .OrderBy(customerName => customerName)
                .Take(100)
                .ToListAsync();
                return Ok(distinctCustomerName);
            }
            else
            {
                // If searchInput is provided, filter records based on the searchInput
                var filteredCustomerName = await _SoftconClientDataDbContext.SoftconClientsData
                    .Where(c => c.CustomerName != null && c.CustomerName.Contains(NameSearchInput.SearchLetters))
                    .Select(c => c.CustomerName)
                    .Distinct()
                    .OrderBy(customerName => customerName)
                    .Take(100)
                    .ToListAsync();

                return Ok(filteredCustomerName);

            }

        }
        #endregion
    }
    #endregion
}
