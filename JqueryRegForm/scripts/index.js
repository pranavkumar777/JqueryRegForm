$(document).ready(function () {
 
    


    $("#changecolor").click(function () {
        var colorlist = ["yellow", "orange", "gray"];
        var rand = colorlist[Math.floor(Math.random() * colorlist.length)];
        $(".jumbotron").css("background-color", rand);
    });


    $("#firstname").focusin(function () {
        var firstname = $("#firstname").val();
        if (firstname.length > 50)
            $('#error').hide();
    });


    $("#firstname").focusout(function () {
        var firstname = $("#firstname").val();
        if (firstname.length > 50)
            $('#firstname').after('<span id="error">Last Name should contain maximum 50 characters</span>');
    }); 
 

    $("#lastname").focusin(function () {
        var lastname = $("#lastname").val();
        if (lastname.length > 50)
            $('#lastNameError').hide();
    });

    $("#lastname").focusout(function () {
        var lastname = $("#lastname").val();
        if (lastname.length > 50)
            $('#lastname').after('<span id="lastNameError">Last Name should contain maximum 50 characters</span>');
    });

    var minDate = new Date();
    minDate.setDate(minDate.getDate() - 10)

    $("#date").datepicker({
        showAnim: 'drop',      
        dateFormat: 'mm/dd/yy',
        minDate: minDate
    });


    $("#address1").focusin(function () {
        var address = $("#address1").val();
        if (address.length > 150)
            $('#addressError').hide();
    });

    $("#address1").focusout(function () {
        var address = $("#address1").val();
        if (address.length > 150)
            $('#address1').after('<span id="addressError">Address should contain maximum 150 characters</span>');
    });

    $("#address2").focusin(function () {
        var address = $("#address2").val();
        if (address.length > 150)
            $('#address2Error').hide();
    });

    $("#address2").focusout(function () {
        var address = $("#address2").val();
        if (address.length > 150)
            $('#address2').after('<span id="addressError">Address should contain maximum 150 characters</span>');
    });

    $("#mobilenumber").focusin(function () {
        var mobileNumber = $("#mobilenumber").val();
        if (mobileNumber.length!=10)
            $('#mobileNumberError').hide();
    });

    $("#mobilenumber").focusout(function () {
        var mobilenumber = $("#mobilenumber").val();
        if (mobilenumber.length!=10)
            $('#mobilenumber').after('<span id="mobileNumberError">Invalid mobile number</span>');
    });

    $("#comments").focusin(function () {
        var address = $("#comments").val();
        if (address.length > 1000)
            $('#commentsError').hide();
    });

    $("#comments").focusout(function () {
        var address = $("#comments").val();
        if (address.length > 1000)
            $('#comments').after('<span id="commentsError">Comments should have contain maximum 1000 characters</span>');
    });

    $.ajax({
        url: "/Home/GetAge",
        type: 'GET',
        cache: false,
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                $('#age').add(document.getElementById("age").innerHTML += "<option value='" + result[i] + "'>" + result[i] + "</option>")
            }
        }
    });

      $.ajax({
        url: "/Home/GetCountry",
        type: 'GET',
        cache:false,
        success: function (countries)
        {
            var countriesList =' "<option value="none" selected disabled hidden >select an option </option>"' ;
            $.each(countries, (index, country) => {
               countriesList += "<option value=" + country.CountryId + ">" + country.CountryName + "</option>";
            });

            $("#country").html(countriesList);
         
        }
    })
 

  $("#country").hover(function(){
      if ($("#country").val() !=null) {
          console.log($("#country").val());
          var id= $("#country").val();
          $.ajax({             
              url: "/Home/GetState",
              type: 'GET',
              data: { countryId: id },
              success :function (State) {
                  var stateList = ' "<option value="none" selected disabled hidden >select an option </option>"';

                  $.each(State, (index, state) => {
                      stateList += "<option value=" + state.StateId + ">" + state.StateName + "</option>";
                  });

                  $("#state").html(stateList);

              }
          });
      }
  }) 


  $("#state").hover(function () {
      if ($("#state").val() != null) {
          console.log($("#state").val());
          var id = $("#state").val();
         

          $.ajax({
              url: "/Home/GetCity",
              type: 'GET',
              data: { stateId: id },
              success: function (City) {
                  var cityList = ' "<option value="none" selected disabled hidden >select an option </option>"';

                  $.each(City, (index, city) => {
                      cityList += "<option value=" + city.CityId + ">" + city.CityName + "</option>";
                  });

                  $("#city").html(cityList);

              }
          });
      }
  })



  $("#firstname"||"#lastname"||"gender").hover(function () {

      if ($("#firstname").val() && $("#lastname").val() && $("#gender").val() != null)
      {
          var fname = $("#firstname").val();
          var lname = $("#lastname").val();
          if($("#gender").val()=="Male")
          {
              var salutation = "Mr. " + fname + " " + lname;
              $("#salutation").html(salutation)
          }

          else
          {
              var salutation = "Ms. " + fname + " " + lname;
              $("#salutation").html(salutation)
          }
      }

  })



  $("#reg-form").submit(function () {
      var userDetails = {

          FullName: $("#firstname").val(),
          LastName: $("#lastname").val(),
          Age: $("#age").val(),
          Gender: $("#gender").val(),
          Address1: $("#address1").val(),
          Address2: $("#address2").val(),
          Country: $("#country").val(),
          State: $("#state").val(),
          City: $("#city").val(),
          MobileNumber: $("#mobilenumber").val(),
          Relocation: $("#relocation").val(),
          Comments: $("#comments").val(),

      };
      $.ajax({
          type: "POST",
          url: "/Home/Submit",
          data: { userDetails: userDetails },
          success: function () {
              window.location = "/Home/Submit";
          }
      }
            );

  })
  
  })
    
