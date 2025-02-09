//The main script for the individual JavaScript project.

//Using an external API for the project.
//Utilizing local storage to create, read, update, and delete data.



//console.log("Starting out");
const BASE_URL = "https://rest.ensembl.org/";
const ext = "/lookup/id/ENSG00000157764?content-type=application/json;expand=1";  //expand not available for proteins
const ext1 = "/lookup/id/";
const ext2 = "?content-type=application/json;"

//Example protein "id": "ENSP00000419060"

//Protein stable ID starts with ENSP
//Define the protein stable ID's as an array.
const proteinStableId_array = ["ENSP00000518625", "ENSP00000518623", "ENSP00000518638", "ENSP00000518637", "ENSP00000518635", "ENSP00000518633", "ENSP00000518632", "ENSP00000518590", "ENSP00000518612", "ENSP00000518609"];


  ////create the specific URL for each proteinStableId
  //proteinStableId_array.forEach((protein) => {}

//add modified proteinStableId_array to copyItems array
const urls = [];
proteinStableId_array.forEach((protein) => {
  url = BASE_URL + ext1 + protein + ext2;
  urls.push(url);
});

//console.log(urls);

//2. Fetching the data from the API
//response cors - is cross origin resource sharing
Promise.allSettled(urls.map(url =>
  fetch(url).then(texts => {
  //console.log(`Received request result..., ${texts.json}`)
  console.log(texts.json())
  })

))
