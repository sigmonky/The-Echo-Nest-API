/**
 * Song API:Api calls for getting data about songs.
*/

define(['config','utils/lodash','utils/backbone'],function( config ){

 console.log("Song Model loaded");

 var Song = Song || {};

  /* Search for songs given different query types */
  Song.Search = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/song/search?'
  }),
  
  //Get info about songs given a list of ids
  Song.Profile = Backbone.Model.extend(function(){
  	urlRoot: config.apiurl + '/song/profile?'
  }),
  
  //Identifies a song given an Echoprint or Echo Nest Musical Fingerprint hash codes.
  Song.Identify = Backbone.Model.extend(function(){
  	urlRoot: config.apiurl + '/song/identify?'
  })


});