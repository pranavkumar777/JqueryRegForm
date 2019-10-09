using System;
using System.Collections.Generic;
using System.Linq;

namespace JqueryRegForm.Models
{
    public class Location

    {

        List<Country> countries = new List<Country>() { new Country() { CountryId = 1, CountryName = "India" },

        new Country() {CountryId = 2, CountryName= "USA" },

        new Country() {CountryId = 3, CountryName = "UK" } };



        List<State> states = new List<State>() { new State() { CountryId = 1, StateName = "Tamil Nadu", StateId = 1 },

        new State() {CountryId = 1, StateName= "Kerala", StateId = 1 },

        new State() {CountryId = 1, StateName = "AP", StateId = 1 } };



        List<City> city = new List<City>() { new City() { CityId = 1, CityName = "Chennai", StateId = 1 },

        new City() {CityId = 1, CityName= "Coimbatore", StateId = 1 },

        new City() {CityId = 1, CityName = "Madurai", StateId = 1 } };



        public IEnumerable<Country> GetCountries()

        {

            return countries;

        }



        public IEnumerable<State> GetState(int countryId)

        {

            return states.Where(x => x.CountryId == countryId);

        }



        public IEnumerable<City> GetCity(int stateId)

        {

            return city.Where(x => x.StateId == stateId);

        }

    }



    public class City

    {

        public int CityId { get; set; }



        public string CityName { get; set; }



        public int StateId { get; set; }

    }



    public class State

    {

        public int StateId { get; set; }



        public string StateName { get; set; }



        public int CountryId { get; set; }

    }



    public class Country

    {

        public int CountryId { get; set; }

        public string CountryName { get; set; }

    }
}