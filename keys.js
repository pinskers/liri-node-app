console.log('Keys.js loaded');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.Spotify = new Spotify ({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
