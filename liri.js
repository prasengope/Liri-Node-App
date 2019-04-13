//requiring file system
let fs = require('fs');

//requiring the movies.js file
let myMovies = require('./movies.js');

//storing all words from the user
var userCommand = process.argv[2];
// console.log(userCommand);

//creating an usable user input from the user commands
var userInput = process.argv.splice(3, process.argv.length).join(' ');
// console.log(userInput);
