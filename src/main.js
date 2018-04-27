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
        // let doctorArray;
        // let doctorArrayLength;
        // let i;
        if(response.meta.total != 0){
          $(".results").html(`<h3>`+ response.data[0].practices[0].name + `</h3><h5>`+ response.data[0].practices[0].visit_address.street+' '+response.data[0].practices[0].visit_address.street2 + '<br>' + response.data[0].practices[0].visit_address.city +', ' +response.data[0].practices[0].visit_address.state + " " + response.data[0].practices[0].visit_address.zip +`</h5>`);
        } else {
          $(".results").html('<h3>No results matched your criteria. Please check your spelling or try another search</h3>')
        }
      }).fail(function(error){
        $(".results").text(`There was an error processing your request: ${error.responseText}`);
      });
    } else if (issueInput === "" && nameInput != "") {
      nameAPI = newCall.nameSearch(nameInput)
      nameAPI.then(function(response){
        if(response.meta.total !=0){
          $(".results").html(`<h3>`+ response.data[0].practices[0].name + `</h3><h5>`+ response.data[0].practices[0].visit_address.street+' '+response.data[0].practices[0].visit_address.street2 + '<br>' + response.data[0].practices[0].visit_address.city +', ' +response.data[0].practices[0].visit_address.state + " " + response.data[0].practices[0].visit_address.zip +`</h5>`);
        } else {
          $(".results").html('<h3>No results matched your criteria. Please check your spelling or try another search</h3>')
        }
      }).fail(function(error){
        $(".results").text(`There was an error processing your request: ${error.responseText}`);
      });
    } else if (issueInput != "" && nameInput != ""){
      hybridAPI = newCall.hybridSearch(issueInput,nameInput);
      hybridAPI.then(function(response){
        if(response.meta.total !=0){
          $(".results").html(`<h3>`+ response.data[0].practices[0].name + `</h3><h5>`+ response.data[0].practices[0].visit_address.street+' '+response.data[0].practices[0].visit_address.street2 + '<br>' + response.data[0].practices[0].visit_address.city +', ' +response.data[0].practices[0].visit_address.state + " " + response.data[0].practices[0].visit_address.zip +`</h5>`)
        } else {
          $(".results").html('<h3>No results matched your criteria. Please check your spelling or try another search</h3>')
        }
      }).fail(function(error){
        $(".results").text(`There was an error processing your request: ${error.responseText}`);
      });
    }
  });
});
