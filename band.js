//checking movies.js connection
// console.log('band.js is connected!');

//requiring key.js
var keys = require('./keys.js');

//requiring file system
var fs = require('fs');

//requiring axios
var axios = require('axios');

//requiring moment
var moment = require('moment');

//myMovies function to search for movies and console.logging relevant information
function myBand(userInput) {
	var band = userInput;

	var url = 'https://rest.bandsintown.com/artists/' + band + '/events?app_id=' + keys.bandsInTown.id;

	axios.get(url).then(
		function(response) {
			for (var i = 0; i < 10; i++) {
				console.log('\n************************************************');
				console.log('Venue: ' + response.data[i].venue.name);
				console.log(
					'Location: ' +
						response.data[i].venue.city +
						', ' +
						response.data[i].venue.region +
						', ' +
						response.data[i].venue.country
				);
				console.log(
					'Date: ' + moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A')
				);
				console.log('\n************************************************');

				//adds text to log.txt
				fs.appendFileSync('log.txt', '\n****************************************\n');
				fs.appendFileSync('log.txt', 'Concert Search Log:\n');
				fs.appendFileSync('log.txt', 'Venue: ' + response.data[i].venue.name + '\n');
				fs.appendFileSync(
					'log.txt',
					'Location: ' +
						response.data[i].venue.city +
						', ' +
						response.data[i].venue.region +
						', ' +
						response.data[i].venue.country +
						'\n'
				);
				fs.appendFileSync(
					'log.txt',
					'Date: ' +
						moment(response.data[i].datetime, 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A') +
						'\n'
				);
				fs.appendFileSync('log.txt', '****************************************\n');
			}
		},
		function(error) {
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
				console.log('Error', error.message);
			}
			console.log(error.config);
		}
	);
}

//Exporting the function which we will use in liri.js
module.exports = myBand;
