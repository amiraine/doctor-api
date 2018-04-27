//import necessary files and classes
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './../src/API.js';
//front end
$(document).ready(function(){
  $('.search').submit(function(event){
    event.preventDefault();
    //variables for search
    let newCall;
    let issueInput;
    let nameInput;
    let issueAPI;
    let nameAPI;
    let hybridAPI;
    newCall = new API();
    issueInput = $('#issue').val();
    nameInput = $('#name').val();
    //functions on functions on functions
    if (issueInput != "" && nameInput === ""){
      issueAPI = newCall.issueSearch(issueInput);
      issueAPI.then(function(response){
        $(".results").text(response.data[0].practices.name);
      })
    } else if (issueInput === "" && nameInput != "") {
      nameAPI = newCall.nameSearch(nameInput)
    } else if (issueInput != "" && nameInput != ""){
      hybridAPI = newCall.hybridSearch(issueInput,nameInput);
    }
  });
});
// var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=45.523,-122.676,100&skip=2&limit=10&user_key=' + api_key;
