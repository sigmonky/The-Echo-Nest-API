/** 
//http://developer.echonest.com/docs/v4/artist.html
Api calls for getting data about artists.

The Echo Nest provides methods to return a wide range of data about any music artist. For methods that return lists of artists (search, similar, top_hottt), results can be constrained to a particular rosetta stone catalog or personal catalog. See Project Rosetta Stone for details.

Artist
 * biographies
 * blogs
 * familiarity
 * hotttnesss
 * images
 * list_terms
 * news
 * profile
 * reviews
 * search
 * extract (beta)
 * songs
 * similar
 * suggest (beta)
 * terms
 * top_hottt
 * top_terms
 * twitter
 * urls
 * video
*/

define(['config','utils/lodash','utils/backbone'],function( config ){

console.log("Artist Model loaded");

var Artist = Artist || {};
	
  //Get a list of artist biographies.
  Artist.Bio = Backbone.Model.extend({
  
  	defaults: {
  		text: '',
  		site: '',
  		url: '',
  		license: {
  			type: '',
  			attribution: '',
  			url: ''
  		}
  	},
  	urlRoot: config.apiurl + '/artist/biographies?api_key=' + config.key,
  	url: function(){
  	
  		/*
  		
  		@params: id*,name*,format,callback*,results,start,license
  		 
  		 need and id or a name
  		 
  		 need a callback if format is jsonp
  		 
  		 results default is 15
  		 
  		 start index is 0
  		 
  		 license is not required
  		
  		*/
  		
  		
  		return this.urlRoot; 
  	/*
  	 id, name, format, callback, results, start, license.
  	*/
  	
  	},
  	validate: function(){
  	/*
  	 runs on set or save. return error of choice
  	 no return = successul
  	*/
  	 
  	}
  });
  
  //Get a list of blog articles related to an artist.
  Artist.Blogs = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/blogs?api_key=' + config.key,
  	validate: function(){
  	
  	}

  });
  
  //Get our numerical estimation of how familiar an artist currently is to the world.
  Artist.Familiarity = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/familiarity?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Returns our numerical description of how hottt an artist currently is.
  Artist.Hottness = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/hotttnesss?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get a list of artist images.
  Artist.Images = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/images?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get a list of the best typed descriptive terms for use with search. 
  Artist.ListTerms = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/list_terms?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get a list of news articles found on the web related to an artist.
  Artist.News = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/news?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get basic information on an artist: the name, the Echo Nest ID, and the MusicBrainz ID.
  Artist.Profile = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/profile?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get reviews related to an artist's work.
  Artist.Reviews = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/api/v4/artist/reviews?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Search artists.
  Artist.Search = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/search?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Extract artist names from text.(beta)
  Artist.Extract = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/extract?api_key=' + config.key,
  	validate: function(){
  	
  	}
  }); //beta
  
  //Get a list of songs created by an artist.
  Artist.Songs  = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/songs?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Return similar artists given one or more artists for comparison.
  Artist.Similar = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/similar?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Suggest artists based upon partial names. (beta)
  Artist.Suggest = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/suggest?api_key=' + config.key,
  	validate: function(){
  	
  	}
  }); //beta
  
  // Get a list of most descriptive terms for an artist
  Artist.Terms = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/terms?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Return a list of the top hottt artists.
  Artist.TopHottt = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/top_hottt?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Returns a list of the overall top terms. Up to 1,000 terms can be returned.
  Artist.TopTerms = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/top_terms?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Gets the twitter handle for an artist
  Artist.Twitter = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/twitter?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get links to the artist's official site, MusicBrainz site, MySpace site, Wikipedia article, Amazon list, and iTunes page.
  Artist.Urls = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/urls?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get a list of video documents found on the web related to an artist.
  Artist.Video = Backbone.Model.extend({
  	urlRoot: '/artist/video?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });

return Artist;

});