const request = require("request");



// https://api.thecatapi.com/v1/images/search
// https://api.thecatapi.com/v1/breeds/search
const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    let description = data[0].description;
    console.log(description);
    return callback(error, description);
    // console.log(typeof data);
  });
};

// console.log(typeof body)
module.exports = {fetchBreedDescription};