//requiring dotenv
require('dotenv').config();

//requiring file system
var fs = require('fs');

//requiring the movies.js file
var myMovies = require('./movies.js');

//storing all words from the user
var userCommand = process.argv[2];
// console.log(userCommand);

//creating an usable user input from the user commands
var userInput = process.argv.splice(3, process.argv.length).join(' ');
// console.log(userInput);

//Program conditions
switch (userCommand) {
	// help function to clarify commands used
	case 'help':
		console.log(
			'Please type one of these commands\n' +
				"'concert-this': to search your favorite artist concerts\n" +
				"'spotify-this-song': to search your favorite song\n" +
				"'movie-this': to search your favorite movie \n" +
				"'do-what-it-says': using command from random.txt \n"
		);
		break;
	case 'movie-this':
		myMovies(userInput);
		break;
	//if anything else written
	default:
		console.log("LIRI doesn't understand that - Please type 'node liri.js help' for more information");
};
