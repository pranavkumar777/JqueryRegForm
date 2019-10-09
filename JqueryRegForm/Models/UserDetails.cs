using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JqueryRegForm.Models
{
    public class UserDetails
    {
        public string FullName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; } = "";
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public int MobileNumber { get;set;}
        public string Relocation { get; set; }
        public string Comments { get; set; } = "";




    }
}