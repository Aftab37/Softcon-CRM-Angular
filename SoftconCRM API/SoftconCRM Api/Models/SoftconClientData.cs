using System.ComponentModel.DataAnnotations.Schema;

namespace SoftconCRM_Api.Models
{
    [Table("SoftconERPClientData")]
    public class SoftconClientData
    {
        public long ID { get; set; }
        public long SoftconClientID { get; set; }
        public long RecordID { get; set; }
        public short TableID { get; set; }
        public short IsDistributor { get; set; }
        public DateTime RecordCreated { get; set; }
        public string ProjectType { get; set; }
        public string ClientName { get; set; }
        public string Type { get; set; }
        public string CustomerName { get; set; }
        public string BrandName { get; set; }
        public string NickName { get; set; }
        public string CPerson { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Area { get; set; }
        public string Zone { get; set; }
        public string Std { get; set; }
        public string Phone1 { get; set; }
        public string Phone2 { get; set; }
        public string Phone3 { get; set; }
        public string Fax1 { get; set; }
        public string Fax2 { get; set; }
        public string Fax3 { get; set; }
        public string Add1 { get; set; }
        public string Add2 { get; set; }
        public string Add3 { get; set; }
        public string Pincode { get; set; }
        public string EmailId { get; set; }
        public string MobileNo1 { get; set; }
        public string MobileNo2 { get; set; }
        public string MobileNo3 { get; set; }
        public string GSTINNo { get; set; }
        public short IsNewRecord { get; set; }
    }
}
