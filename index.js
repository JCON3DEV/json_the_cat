const breedName = process.argv.slice(2);
const {fetchBreedDescription} = require('./breedFetcher.js');

// const callback = function (error, descrition){
// };

//THis is a callback function
fetchBreedDescription(breedName,/*callback*/(error, description) => {
  if (error) {
    console.log('ERROR: Something Went Wrong');

  }
  
  if (description === undefined) {
    console.log("no such paws here");
  }

});
