// VARIABLES

// DotEnv Node Package
var dotenv = require('dotenv').config()

// fs Node Package
var fs = require('fs');

// Twitter Node Package
var Twitter = require('twitter');

// Spotify Node Package
var Spotify = require('node-spotify-api');

// Request Node Package
var request = require('request');

// Key linkup
var keys = require('./keys');

// argv variables
var nodeArgv = process.argv;
var request = process.argv [2];

// We'll probably need something here to process songs with more than one word?

// LOGIC
switch(request){
  case "my-tweets":
  // show your last 20 tweets and when they were created at in your terminal/bash window
  break;

  case "spotify-this-song":
  // show the following information about the song in your terminal/bash window
     
  //   * Artist(s)
     
  //   * The song's name
  
  //   * A preview link of the song from Spotify
  
  //   * The album that the song is from

  //   * If no song is provided then your program will default to "The Sign" by Ace of Base.
  break;

  case "movie-this":
  //    output the following information to your terminal/bash window:

  //     * Title of the movie.
  //     * Year the movie came out.
  //     * IMDB Rating of the movie.
  //     * Rotten Tomatoes Rating of the movie.
  //     * Country where the movie was produced.
  //     * Language of the movie.
  //     * Plot of the movie.
  //     * Actors in the movie.

  //   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
  break;

  case "do-what-it-says":
  // Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
  //    * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
  //    * Feel free to change the text in that document to test out the feature for other commands.
  break;

  default:
  console.log ("Please enter one of the following commands:\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says");
  break;
}

// FUNCTIONS

// Twitter Function

// Spotify Function

// omdb Data Function

// do-what-it-says Function