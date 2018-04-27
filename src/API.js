//declaring a class which will make API calls
import $ from 'jquery';

class API{
  issueSearch(issue){
    let issueOutput = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=45.523,-122.676,100&skip=2&user_key=${process.env.exports.apiKey}`);
    return issueOutput;
  }
  nameSearch(name){
    let nameOutput = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.523,-122.676,100&skip=2&user_key=${process.env.exports.apiKey}`);
    return nameOutput;
  }
  hybridSearch(issue,name){
    let hybridOutput = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=45.523,-122.676,100&skip=2&user_key=${process.env.exports.apiKey}`);
    return hybridOutput;
  }
}

export { API };
