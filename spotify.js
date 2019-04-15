//requiring key.js
var keys = require('./keys.js');

//requiring file system
var fs = require('fs');

//requiring node-spotify-api npm package
var Spotify = require('node-spotify-api');

//loading spotify ID and secret into spotify var
var spotify = new Spotify(keys.spotify);

//mySpotify function to search for songs and to console.log relevant information
function mySpotify(userInput) {
	var song = userInput;
	if (!song) {
		console.log("If you have not listened to 'The Sign' by 'Ace of Base', you should.\n");
		console.log("It's on Spotify.");
		song = 'The Sign Ace of Base';
	}

	spotify
		.search({ type: 'track', query: song })
		.then(function(response) {
			console.log('\n************************************************');
			console.log('Artist(s): ' + response.tracks.items[0].artists[0].name);
			console.log("The song's name: " + response.tracks.items[0].name);
			console.log('Preview link: ' + response.tracks.items[0].preview_url);
			console.log('Album: ' + response.tracks.items[0].album.name);
			console.log('\n************************************************');

            //adds text to log.txt
            fs.appendFileSync('log.txt', '\n****************************************\n');
			fs.appendFileSync('log.txt', 'Song Search Log:\n');
			fs.appendFileSync('log.txt', 'Song Name: ' + response.tracks.items[0].name + '\n');
			fs.appendFileSync('log.txt', 'Artist(s): ' + response.tracks.items[0].artists[0].name  + '\n');
			fs.appendFileSync('log.txt', 'Album: ' + response.tracks.items[0].album.name  + '\n');
			fs.appendFileSync('log.txt', 'Preview Link: ' + response.tracks.items[0].preview_url  + '\n');
			fs.appendFileSync('log.txt', '****************************************\n');
		})
		.catch(function(err) {
			console.error('Error occurred: ' + err);
		});
}

//Exporting the function which we will use in liri.js
module.exports = mySpotify;
