// VARIABLES

// DotEnv Node Package
var dotenv = require('dotenv').config()

// fs Node Package
var fs = require('fs');

// Request Node Package
var request = require('request');

// Key linkup
var keys = require('./keys.js');

// Spotify Key
// var spotify = new spotify(keys.spotifykeys);

// Twitter Key
var twitter = require('twitter');
var client = new twitter(keys.twitterKeys);

// argv variables
var nodeArgv = process.argv;
var request = process.argv [2];

// Movie or song
var movieSong = "";

// For multi-word argvs (Had to look this up)
for (var i=3; i<nodeArgv.length; i++){
  if(i>3 && i<nodeArgv.length){
    x = movieSong + "+" + nodeArgv[i];
  } else{
    x = movieSong + nodeArgv[i];
  }
}

// LOGIC
switch(request){
  case "my-tweets":
  twitterFunc();
  break;

  case "spotify-this-song":
  spotifyFunc();
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
  console.log ("Please enter one of the following:\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says");
  break;

  // ^^^ Redo this as Inquirer if given the time... ^^^
}

// FUNCTIONS

// Twitter Function -- CURRENTLY THROWS ERROR --
function twitterFunc(){
  var tweeter = {screen_name: 'eso_bob'};
  client.get('statuses/user_timeline', tweeter, function(error, tweets, response) {
    if (error) {
      console.log('An error has occurred. :(');
    }
    else
      {
        // Loop through tweets
        for(var i = 0; i<tweets.length; i++){
          var date = tweets[i].created_at;
          console.log(tweets[i].text + " " + date.substring(0, 19)); // Stop at 20 tweets
      }
    }
  })
}

// Spotify Function -- CURRENTLY NONFUNCTIONAL --
function spotifyFunc(song){
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    for(var i = 0; i <data.tracks.items.length; i++){
      var spotifyData = data.tracks.items[i];
      console.log("Artist: " + spotifyData.artists[0].name +
      "\nSong: " + spotifyData.name +
      "\n Preview:" + spotifyData.previewURL + 
      "\nAlbum: " + spotifyData.album.name);
    }
  })
}
// omdb Data Function

// do-what-it-says