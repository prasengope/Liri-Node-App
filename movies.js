//requiring key.js
var keys = require("./keys.js");

//requiring file system
var fs = require("fs");

//requiring axios
var axios = require("axios");

console.log("movies.js is connected!")



function myMovies(userInput) {
    var movie = userInput;
    if (!movie) {
        console.log("If you have not watched 'Mr. Nobody', you should.\n");
        console.log("It's on Netfllix.");
        movie = 'Mr. Nobody';
    }

    var url = 'https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=' + keys.omdb.id;

    axios.get(url).then(function (response) {
        console.log("The movie's rating is: " + response.data.imdbRating);
        console.log('The movie you searched for: ' + movie);
    },

        function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    );
};

//Exporting the function which we will use in liri.js
module.exports = myMovies;
