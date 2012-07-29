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

//console.log("Artist Model loaded");
/*
 Required: name || id, api key.
 Required (search): api key only

*/


function hasRequired(attr){
  	
  		if( !attr['id'] && !attr['name']){
  	      	     
  	     return "Enter and id or name attribute";
  	     
  		}

}

function _url(route){
	return config.apiurl + '/artist/'+ route +'?api_key=' + config.key +'&results=1&';
}

var ArtistM = ArtistM || {};
   
  //Get a list of artist biographies.
  ArtistM.Bio = Backbone.Model.extend({

  	urlRoot: config.apiurl + '/artist/biographies?api_key=' + config.key +'&results=1&',
  	url: function(){
 		
   		/* @params: id*,name*,format,callback*,results,start,license */	
  		var id = this.get('id'), 
  			name = this.get('name'),
  			typeReq;
		
   		typeReq = this.has('id') ? 'id=' + id : 'name=' + name;		
  		
  		return this.urlRoot + typeReq;

  	},
  	validate: hasRequired
  	
  	/*
  	function(attr){
  		
  		//$error = id_or_name(attr);
  	
  	
  		if( !attr['id'] && !attr['name']){
  	      	     
  	     return "Enter and id or name attribute";
  	     
  		}
  		
  
  	}*/,
  	parse: function(obj){  	  	 
  	 /* response: license:obj, site:string, text:string, truncated:bool, url:string  */ 
  	 return obj.response.biographies[0];
  	}
  });
  
  //Get a list of blog articles related to an artist.
  ArtistM.Blogs = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/blogs?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Get our numerical estimation of how familiar an artist currently is to the world.
  ArtistM.Familiarity = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/familiarity?api_key=' + config.key,
  	url: function(){
  	
  	},
  	validate: hasRequired
  });
  
  //Returns our numerical description of how hottt an artist currently is.
  ArtistM.Hottness = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/hotttnesss?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Get a list of artist images.
  ArtistM.Images = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/images?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Get a list of the best typed descriptive terms for use with search. 
  ArtistM.ListTerms = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/list_terms?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Get a list of news articles found on the web related to an artist.
  ArtistM.News = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/news?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Get basic information on an artist: the name, the Echo Nest ID, and the MusicBrainz ID.
  ArtistM.Profile = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/profile?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Get reviews related to an artist's work.
  ArtistM.Reviews = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/api/v4/artist/reviews?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Search artists.
  ArtistM.Search = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/search?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Extract artist names from text.(beta)
  ArtistM.Extract = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/extract?api_key=' + config.key,
  	validate: hasRequired
  }); //beta
  
  //Get a list of songs created by an artist.
  ArtistM.Songs  = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/songs?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Return similar artists given one or more artists for comparison.
  ArtistM.Similar = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/similar?api_key=' + config.key,
  	validate: hasRequired
  });
  
  //Suggest artists based upon partial names. (beta)
  ArtistM.Suggest = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/suggest?api_key=' + config.key,
  	validate: hasRequired
  }); //beta
  
  // Get a list of most descriptive terms for an artist
  ArtistM.Terms = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/terms?api_key=' + config.key,
  	validate: hasRequired  
  });
  
  //Return a list of the top hottt artists.
  ArtistM.TopHottt = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/top_hottt?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Returns a list of the overall top terms. Up to 1,000 terms can be returned.
  ArtistM.TopTerms = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/top_terms?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Gets the twitter handle for an artist
  ArtistM.Twitter = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/twitter?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get links to the artist's official site, MusicBrainz site, MySpace site, Wikipedia article, Amazon list, and iTunes page.
  ArtistM.Urls = Backbone.Model.extend({
  	urlRoot: config.apiurl + '/artist/urls?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });
  
  //Get a list of video documents found on the web related to an artist.
  ArtistM.Video = Backbone.Model.extend({
  	urlRoot: '/artist/video?api_key=' + config.key,
  	validate: function(){
  	
  	}
  });

return ArtistM;

});