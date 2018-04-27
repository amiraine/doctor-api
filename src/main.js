//import necessary files and classes
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './../src/API.js';
import './styles.css';

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
    if(issueInput === "" && nameInput === ""){
      alert('You must fill in at least one of the search fields to continue');
    } else if (issueInput != "" && nameInput === ""){
      issueAPI = newCall.issueSearch(issueInput);
      issueAPI.then(function(response){
        let doctorArrayLength;
        let i;
        doctorArrayLength = response.data.length;
        if(response.meta.total != 0){
          for(i=0; i < doctorArrayLength; i++){
            $(".results").append(`<div class="card result-card col-md-4">
              <div class="card-header">
                <h3>` + response.data[i].practices[0].name + `</h3>
              </div>
              <div class="card-body">
                <h5>`+ response.data[i].practices[0].visit_address.street+'<br>' + response.data[i].practices[0].visit_address.city +', ' +response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip +`</h5><p>Phone: `+ response.data[i].practices[0].phones[0].number +
              `</div>`
            );
            if(response.data[i].practices[0].accepts_new_patients === true){
              $(".results").append("<div class='alert alert-success'>"+"This doctor is currently accepting new patients!"+"</div></div>");
            } else {
              $(".results").append("<div class='alert alert-warning'>"+"This doctor is not currently accepting new patients."+"</div>");
            }
            if(response.data[i].practices[0].website != undefined){
              $(".results").append('<h4><a href ="'+response.data[i].practices[0].website+'">'+response.data[i].practices[0].name+'</a></h4></div');
            } else{
              $(".results").append('</div>');
            }
          }
        } else {
          $(".results").html('<div class="alert alert-danger">No results matched your criteria. Please check your spelling or try another search</div>');
        }
      }).fail(function(error){
        $(".results").html(`<div class="alert alert-danger">There was an error processing your request: ${error.responseText}</div>`);
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
            $(".results").append(`<div class="card result-card col-md-4">
              <div class="card-header"><h3>`+ response.data[j].practices[0].name + `</h3><h5>
              </div>
              <div class="card-body">`
                + response.data[j].practices[0].visit_address.street+'<br>' + response.data[j].practices[0].visit_address.city +', ' +response.data[j].practices[0].visit_address.state + " " + response.data[j].practices[0].visit_address.zip +`</h5><p>Phone: ` + response.data[j].practices[0].phones[0].number +
              `</div>`
            );
            if(response.data[j].practices[0].accepts_new_patients === true){
              $(".results").append("<div class='alert alert-success'>"+"This doctor is currently accepting new patients!"+"</div></div>");
            } else {
              $(".results").append("<div class='alert alert-warning'>"+"This doctor is not currently accepting new patients."+"</div></div>");
            }
          }
          if(response.data[j].practices[0].website != undefined){
            $(".results").append('<h4><a href ="'+response.data[j].practices[0].website+'">'+response.data[j].practices[0].name+'</a></h4></div>');
          } else {
            $(".results").append('</div>');
          }
        } else {
          $(".results").html('<div class="alert alert-danger">No results matched your criteria. Please check your spelling or try another search</div>');
        }
      }).fail(function(error){
        $(".results").html(`<div class="alert alert-danger">There was an error processing your request: ${error.responseText}</div>`);
      });
    } else if (issueInput != "" && nameInput != ""){
      hybridAPI = newCall.hybridSearch(issueInput,nameInput);
      hybridAPI.then(function(response){
        let doctorHybrid;
        let k;
        doctorHybrid = response.data.lengh;
        if(response.meta.total !=0){
          for(k=0;k<doctorHybrid;k++){
            $(".results").append(`<div class="card result-card col-md-4">
              <div class="card-header"><h3>`+ response.data[k].practices[0].name + `</h3><h5>
              </div>
              <div class="card-body">`
                + response.data[k].practices[0].visit_address.street+'<br>' + response.data[k].practices[0].visit_address.city +', ' +response.data[k].practices[0].visit_address.state + " " + response.data[k].practices[0].visit_address.zip +`</h5><p>Phone: ` + response.data[k].practices[0].phones[0].number +
              `</div>`
            );
            if(response.data[k].practices[0].accepts_new_patients === true){
              $(".results").append("<div class='alert alert-success'>"+"This doctor is currently accepting new patients!"+"</div></div>");
            } else {
              $(".results").append("<div class='alert alert-warning'>"+"This doctor is not currently accepting new patients."+"</div></div>");
            }
          }
          if(response.data[k].practices[0].website != undefined){
            $(".results").append('<h4><a href ="'+response.data[k].practices[0].website+'">'+response.data[k].practices[0].name+'</a></h4></div>');
          } else {
            $('.results').append('</div>');
          }
        } else {
          $(".results").html('<div class="alert alert-danger">No results matched your criteria. Please check your spelling or try another search</div>');
        }
      }).fail(function(error){
        $(".results").html(`<div class="alert alert-danger"> There was an error processing your request: ${error.responseText} </div>`);
      });
    }
  });
});
