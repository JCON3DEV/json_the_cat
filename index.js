const breedName = process.argv.slice(2);
const {fetchBreedDescription} = require('./breedFetcher.js');

const myCallback = function(error, description) {
  if (error !== null) {
    console.log('ERROR: Something Went Wrong');

  } else {
    console.log(description);
  }
};

fetchBreedDescription(breedName, myCallback);