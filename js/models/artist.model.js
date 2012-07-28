//http://developer.echonest.com/docs/v4/artist.html
/** Artist
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

//Get a list of artist biographies.
var ArtistBio = Backbone.Model.extend({

});

//Get a list of blog articles related to an artist.
var ArtistBlogs = Backbone.Model.extend({

});

//Get our numerical estimation of how familiar an artist currently is to the world.
var ArtistFamiliarity = Backbone.Model.extend({

});

//Returns our numerical description of how hottt an artist currently is.
var ArtistHottness = Backbone.Model.extend({

});

//Get a list of artist images.
var ArtistImages = Backbone.Model.extend({

});

//Get a list of the best typed descriptive terms for use with search. 
var ArtistListTerms = Backbone.Model.extend({

});

//Get a list of news articles found on the web related to an artist.
var ArtistNews = Backbone.Model.extend({

});

//Get basic information on an artist: the name, the Echo Nest ID, and the MusicBrainz ID.
var ArtistProfile = Backbone.Model.extend({

});

//Get reviews related to an artist's work.
var ArtistReviews = Backbone.Model.extend({

});

//Search artists.
var ArtistSearch = Backbone.Model.extend({

});

//Extract artist names from text.(beta)
var ArtistExtract = Backbone.Model.extend({

}); //beta

//Get a list of songs created by an artist.
var ArtistSongs  = Backbone.Model.extend({

});

//Return similar artists given one or more artists for comparison.
var ArtistSimilar = Backbone.Model.extend({

});

//Suggest artists based upon partial names. (beta)
var ArtistSuggest = Backbone.Model.extend({

}); //beta

// Get a list of most descriptive terms for an artist
var ArtistTerms = Backbone.Model.extend({

});

//Return a list of the top hottt artists.
var ArtistTopHottt = Backbone.Model.extend({

});

//Returns a list of the overall top terms. Up to 1,000 terms can be returned.
var ArtistTopTerms = Backbone.Model.extend({

});

//Gets the twitter handle for an artist
var ArtistTwitter = Backbone.Model.extend({

});

//Get links to the artist's official site, MusicBrainz site, MySpace site, Wikipedia article, Amazon list, and iTunes page.
var ArtistUrls = Backbone.Model.extend({

});

//Get a list of video documents found on the web related to an artist.
var ArtistVideo = Backbone.Model.extend({

});