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


console.log("Starting out");
const BASE_URL = "https://rest.ensembl.org/";
const ext = "/lookup/id/ENSG00000157764?content-type=application/json;expand=1";
const ext1 = "/lookup/id/";
const ext2 = "?content-type=application/json;expand=1"



//Example protein "id": "ENSP00000419060"

//Protein stable ID starts with ENSP
//Define the protein stable ID's as an array.
const proteinStableId_array = ["ENSP00000518625", "ENSP00000518623", "ENSP00000518638", "ENSP00000518637", "ENSP00000518635", "ENSP00000518633", "ENSP00000518632", "ENSP00000518590", "ENSP00000518612", "ENSP00000518609"];
console.log(proteinStableId_array);


async function fetchData(protein) {
    
    //create the specific URL for each proteinStableId
    proteinStableId_array.forEach((protein) => {
    
    
            const kombo = BASE_URL + ext1 + protein + ext2;
            console.log(kombo); 

         //   try {
         //         const response = await fetch(kombo).json;
         //       if (!response.ok) {
         //             throw new Error(`Error status: ${response.status}`);
          //          }
          //      } catch (error) {
                    // console.log(response);
          //          console.error(error);
          //XS      }

        })
}

  
//    try {
 //           console.log(kombo);
 //           const response = await fetch(kombo);
 //           if (!response.ok) {
 //               throw new Error(`Error status: ${response.status}`);
//
//            }

//          const data = await response.json();
//          console.log(data);

//        } catch (error) {
//        // console.log(response);
//        console.error(error);
//
//        }

 //   })

    
fetchData(proteinStableId_array);


//Make changes to each gene object.





//I am interested in mapping protein to chromosomal location.
//https://rest.ensembl.org/documentation/info/assembly_translation
//This is something I want to try later, so leaving this here for now.


