const request = require("request");

// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/breeds/search
const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log(error);
    if (error !== null) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined || data[0] === []) {
        callback("breedName is not found", null);
      } else {
        // console.log(data);
        let description = data[0].description;
        callback(error, description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };