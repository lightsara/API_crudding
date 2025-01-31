//The main script for the individual JavaScript project.

//Using an external API for the project.
//Utilizing local storage to create, read, update, and delete data.


//1. Settings for the API

//use strict;
//use warnings;
//use HTTP::Tiny;
//use Time::HiRes qw/sleep/;
//use JSON qw/decode_json/;


//Modeling this script from Maja's excellent code along videos as a first step.
//Second step is to make it my own by adding my own code and ideas.


console.log("Starting out")
const API_URL = 'https://rest.ensembl.org/;



//Get the data from the API.

//testing in terminal: 

//Test1
//curl 'https://rest.ensembl.org/lookup/symbol/homo_sapiens/BRCA2?expand=1' -H 'Content-type:application/json'
//GET lookup/symbol/:species/:symbol

//Test2
//
//GET lookup/id/:id
//https://rest.ensembl.org/lookup/id/ENSG00000165029?expand=1;content-type=application/json

//Test3
//curl 'https://rest.ensembl.org/lookup/id/ENSG00000165029?expand=1'


//Change data slightly.

//Save to LS

//Render the data from LS to UI.


