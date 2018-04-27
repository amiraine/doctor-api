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
        let doctorArrayLength;
        let i;
        doctorArrayLength = response.data.length;
        if(response.meta.total != 0){
          for(i=0; i < doctorArrayLength; i++){
            $(".results").append(`<h3>`+ response.data[i].practices[0].name + `</h3><h5>`+ response.data[i].practices[0].visit_address.street+'<br>' + response.data[i].practices[0].visit_address.city +', ' +response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip +`</h5><p>Phone: `+ response.data[i].practices[0].phones[0].number);
            if(response.data[i].practices[0].accepts_new_patients === true){
              $(".results").append("<h4>"+"This doctor is currently accepting new patients!"+"</h4>")
            } else {
              $(".results").append("<h4>"+"This doctor is not currently accepting new patients."+"</h4>")
            }
          }
        } else {
          $(".results").html('<div class="alert alert-danger">No results matched your criteria. Please check your spelling or try another search</div>')
        }
      }).fail(function(error){
        $(".results").text(`There was an error processing your request: ${error.responseText}`);
      });
////// Search function for doctor name only /////
    } else if (issueInput === "" && nameInput != "") {
      nameAPI = newCall.nameSearch(nameInput);
      nameAPI.then(function(response){
        let doctorNameArrayLength;
        let j;
        doctorNameArrayLength = response.data.length;
        if(response.meta.total !=0){
          for(j=0; j<doctorNameArrayLength; j++){
            $(".results").append(`<h3>`+ response.data[j].practices[0].name + `</h3><h5>`+ response.data[j].practices[0].visit_address.street+'<br>' + response.data[j].practices[0].visit_address.city +', ' +response.data[j].practices[0].visit_address.state + " " + response.data[j].practices[0].visit_address.zip +`</h5><p>Phone: ` + response.data[j].practices[0].phones[0].number);
          }
        } else {
          $(".results").html('<div class="alert alert-danger">No results matched your criteria. Please check your spelling or try another search</div>')
        }
      }).fail(function(error){
        $(".results").text(`There was an error processing your request: ${error.responseText}`);
      });
    } else if (issueInput != "" && nameInput != ""){
      hybridAPI = newCall.hybridSearch(issueInput,nameInput);
      hybridAPI.then(function(response){
        let doctorHybrid;
        let k;
        doctorHybrid = response.data.lengh;
        if(response.meta.total !=0){
          for(k=0;k<doctorHybrid;k++){
            $(".results").append(`<h3>`+ response.data[k].practices[0].name + `</h3><h5>`+ response.data[k].practices[0].visit_address.street+'<br>' + response.data[k].practices[0].visit_address.city +', ' +response.data[k].practices[0].visit_address.state + " " + response.data[k].practices[0].visit_address.zip +`</h5><p>Phone: ` + response.data[k].practices[0].phones[0].number)
          }
        } else {
          $(".results").html('<div class="alert alert-danger">No results matched your criteria. Please check your spelling or try another search</div>')
        }
      }).fail(function(error){
        $(".results").text(`There was an error processing your request: ${error.responseText}`);
      });
    }
  });
});
