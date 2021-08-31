const express = require('express');
const axios = require ('axios');
const { random } = require('lodash');
const facts = express.Router();


facts.get('/newfact',(req,res)=>{
 
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts',
      headers: {
        'x-rapidapi-host': 'facts-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': '3ba7886e62msh0ef57cbbf199737p1afd3ajsnc16a0b10af26'
      }
    };
    
    axios.request(options).then(function (response) {
        res.render('facts', {title: 'Facts', fact: response.data});
    }).catch(function (error) {
        console.error(error);
    });
 
  
});

module.exports = facts;