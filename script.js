"use strict";
// --Form validation:--
let validateForm = () => {
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var result = document.querySelector(".result");

  // --Conditions:--
  if (name.value.length < 4 || name.value.length > 10) {
    result.innerHTML = `<h3> Result: "Name":{"error":{length should be in between 4-10 charachters.}} </h3>`;
    return false;
  }
  if (phone.value.length !== 10) {
    result.innerHTML = `<h3> Result: "Phone":{"error":{length should be in between 4-10 charachters.}} </h3>`;
    return false;
  }
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    result.innerHTML = `<h3> Result: "Email":{"error":{Please enter a valid email.}} </h3>`;
    return false;
  } else {
    result.innerHTML = `<h3> Result: "Success":{All fields are valid.}} </h3>`;
    return false;
  }
};
// --conditions end--

// --Fetching country information using Fetch API--

document.addEventListener("DOMContentLoaded", () => {
  const countryNames = document.getElementById("countries");
  // Fetch API
  fetch(
    "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let result1 = "";
      data.forEach((country) => {
        result1 += `<option>${country.name}</option>`;
      });
      countryNames.innerHTML = result1;
    })
    .catch((error) => {
      console.log(error);
    });
});
// --Js-end--
