//Softcon CRM API Prototype 2\SoftconCRM API\SoftconCRM Api\Controllers\SoftconClientDataController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SoftconCRM_Api.Data;
using SoftconCRM_Api.Models;
using System.Reflection.Metadata.Ecma335;

namespace SoftconCRM_Api.Controllers
{

    #region getallclientdata
    /// <summary>
    /// For client data list -
    /// Aftab Ansari - 6/1/24 Time : 5:30pm
    /// </summary>

    //[ApiController]
    /*[Route("api/GetAllClientData")]*/
    public class SoftconClientDataController : Controller
    {
        private readonly SoftconClientDataDbContext _SoftconClientDataDbContext;

        public SoftconClientDataController(SoftconClientDataDbContext softconClientDataDbContext)
        {
            _SoftconClientDataDbContext = softconClientDataDbContext;
        }   

        [HttpGet]
        [Route("api/GetAllClientData")]
        public async Task<IActionResult> GetAllClientData()
        {
            var ClientData = await _SoftconClientDataDbContext.SoftconClientsData.Take(10).ToListAsync();
            return Ok(ClientData);
        }

        #region FilterData
        [HttpPost]
        [Route("api/FilterData")]
        public async Task<IActionResult> FilterData([FromBody] InputData inputData)
        {
            Console.WriteLine("Received Data on Server: ");
            Console.WriteLine($"FromDate: {inputData.FromDate}");
            Console.WriteLine($"ToDate: {inputData.ToDate}");
            Console.WriteLine($"Group: {string.Join(", ", inputData.Group)}");
            Console.WriteLine($"SourceName: {string.Join(", ", inputData.SourceName)}");
            Console.WriteLine($"Name: {string.Join(", ", inputData.Name)}");
            Console.WriteLine($"StateList: {string.Join(", ", inputData.StateList)}");
            Console.WriteLine($"CityList: {string.Join(", ", inputData.CityList)}");
            Console.WriteLine($"Zone: {string.Join(", ", inputData.Zone)}");
            Console.WriteLine($"AreaList: {string.Join(", ", inputData.AreaList)}");
            //Console.WriteLine($"PageNo: {inputData.PageNo}");

            //IQueryable<SoftconClientData> query = _SoftconClientDataDbContext.SoftconClientsData;

            /*// Apply filtering based on the date portion of RecordCreated
            try
            {
                query = query.Where(c =>
                    (EF.Functions.DateDiffDay(c.RecordCreated, inputData.FromDate) >= 0
                    && EF.Functions.DateDiffDay(inputData.ToDate, c.RecordCreated) >= 0));
                //&&
                //(inputData.Group == null || inputData.Group.Contains(c.Type)) &&
                //(inputData.SourceName == null || inputData.SourceName.Contains(c.CustomerName)) &&
                //(inputData.Name == null || inputData.Name.Contains(c.CPerson)) &&
                //(inputData.StateList == null || inputData.StateList.Contains(c.State)) &&
                //(inputData.CityList == null || inputData.CityList.Contains(c.City)) &&
                //(inputData.Zone == null || inputData.Zone.Contains(c.Zone)) &&
                //(inputData.AreaList == null || inputData.AreaList.Contains(c.Area)));
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            var filteredData =   query.Take(10).ToList() ;

            Console.WriteLine($"Filtered Data Count: {filteredData.Count}");

            return Ok(filteredData);*/

            try
            {
                var query = _SoftconClientDataDbContext.SoftconClientsData
                        .Where(data =>
                        (!inputData.FromDate.HasValue || data.RecordCreated >= inputData.FromDate.Value) &&
                        (!inputData.ToDate.HasValue || data.RecordCreated <= inputData.ToDate.Value) &&
                        (inputData.Group == null || !inputData.Group.Any() || inputData.Group.Contains(data.Type)) &&
                        (inputData.SourceName == null || !inputData.SourceName.Any() || inputData.SourceName.Contains(data.ClientName)) &&
                        (inputData.Name == null || !inputData.Name.Any() || inputData.Name.Contains(data.CustomerName)) &&
                        (inputData.StateList == null || !inputData.StateList.Any() || inputData.StateList.Contains(data.State)) &&
                        (inputData.CityList == null || !inputData.CityList.Any() || inputData.CityList.Contains(data.City)) &&
                        (inputData.Zone == null || !inputData.Zone.Any() || inputData.Zone.Contains(data.Zone)) &&
                        (inputData.AreaList == null || !inputData.AreaList.Any() || inputData.AreaList.Contains(data.Area)) &&
                        (!inputData.SkipBlankMobile || !string.IsNullOrEmpty(data.MobileNo1)) &&
                        (!inputData.SkipBlankEmail || !string.IsNullOrEmpty(data.EmailId))
                    );
                if (inputData.IgnoreDuplicateRecords)
                {
                    query = query.GroupBy(data => data.MobileNo1)
                        .Select(group => group.First());
                }

                var filteredData = await query.Take(500).ToListAsync();
            
                return Ok(filteredData);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }

        }
        #endregion
    }
}

#endregion