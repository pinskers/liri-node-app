// VARIABLES

// DotEnv Node Package
var dotenv = require('dotenv').config()

// Twitter Node Package
var Twitter = require('twitter');

// Spotify Node Package
var Spotify = require('node-spotify-api');

// Request Node Package
var request = require('request');

// Key linkup
var keys = require("keys");

// LOGIC
switch(command){
  case: "my-tweets";
  // probably a function that shows tweets here
  break;

  case: "spotify-this-song";
  // probably a function that shows songs here
  break;

  case: "movie-this";
  // probably a function showing omdb titles here
  break;

  case: "do-what-it-says";
  // not sure what this will do yet
  break;

  default:
  console.log ("Please enter one of the following commands:\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says");
  break;
}