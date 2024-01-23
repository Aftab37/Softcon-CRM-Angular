//Softcon CRM API Prototype 3\SoftconCRM API\SoftconCRM Api\Models\InputData.cs

namespace SoftconCRM_Api.Models
{
    public class InputData
    {
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public List<string> Group { get; set; }
        public List<string> SourceName { get; set; }
        public List<string> Name { get; set; }
        public List<string> StateList { get; set; }
        public List<string> CityList { get; set; }
        public List<string> Zone { get; set; }
        public List<string> AreaList { get; set; }
        public bool SkipBlankMobile { get; set; }
        public bool SkipBlankEmail { get; set; }
        public bool IgnoreDuplicateRecords { get; set; }
        //public int PageNo { get; set; }
    }
}
