//checking movies.js connection
console.log("movies.js is connected!")

//requiring key.js
var keys = require("./keys.js");

//requiring file system
var fs = require("fs");

//requiring axios
var axios = require("axios");

//myMovies function to search for movies and console.logging relevant information
function myMovies(userInput) {
    var movie = userInput;
    if (!movie) {
        console.log("If you have not watched 'Mr. Nobody', you should.\n");
        console.log("It's on Netfllix.");
        movie = 'Mr. Nobody';
    }

    var url = 'https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=' + keys.omdb.id;

    axios.get(url).then(function (response) {
        console.log("\n************************************************");
        console.log("Ttile: " + response.data.Title);
        console.log("Year Released: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("***************************************************\n");
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
