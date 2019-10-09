using JqueryRegForm.Models;
using System;

using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JqueryRegForm.Controllers
{
    public class HomeController : Controller
    {
        Location location = new Location();
       
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAge()
        {        
            int[] age = { 24, 25, 26, 27, 28 };    
            return Json(age, JsonRequestBehavior.AllowGet);
            
        }


        public JsonResult GetCountry()
        {
            List<Country> countries = new List<Country>();
            countries = location.GetCountries().ToList<Country>();
            return Json(countries, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult GetState(int countryId)
        {
            
            List<State> state = new List<State>();
            state = location.GetState(countryId).ToList<State>();

            return Json(state, JsonRequestBehavior.AllowGet);

        }


        public JsonResult GetCity(int stateId)
        {
            List<City> city=new List<City>();

            city =location.GetCity(stateId).ToList<City>();

            return Json(city, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult Submit(UserDetails userDetails)
        {

            RedirectToAction("Index");
            return View();
        }
    }
}