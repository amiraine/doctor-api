//declaring a class which will make API calls
import $ from 'jquery'

class API{
  issueSearch(issue){
    let issueOutput = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=97202&skip=0&user_key=28ff22d61cad7e206962e721ab7ed101`)
    return issueOutput
  }
  nameSearch(name){
    let nameOutput = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=97202&skip=0&user_key=28ff22d61cad7e206962e721ab7ed101`)
    return nameOutput
  }
  hybridSearch(name,issue){
    let hybridOutput = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=97202&skip=0&user_key=28ff22d61cad7e206962e721ab7ed101`)
  }
}

export { API };
