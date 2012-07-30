define(['config', 'models/artist.model','utils/lodash','utils/backbone'],function( config,ArtistM ){
 
 var ArtistV = ArtistV || {};


 ArtistV.SingleBio = Backbone.View.extend({
  
  el: $('#bio-list'),
  model: ArtistM.Bio,
 // tagName: 'ul',
 // id: 'bio-list',
  	
  initialize: function(){
    
    var _this = this;
  	var artist = new this.model();
	
	artist.on("error", function(model, error){ //checks for id at set
  	  console.log("An error was found");
  	  console.log(error);
  	});

	
	artist.set({name:this.options.name});
	
	
	artist.fetch({error: function(model,error){ //checks for error on xhr	
  	  	//console.log(error);
  	   },
  	   success: function(model,rObj){
  	    
  	    _this.biography = rObj.response.biographies[0];
  	    _this.render();

  	   }
   });
  },
  events: {
  
  },
  render: function(){
  console.log(this.biography);
   var biography = this.biography;
   var li = '<li>'+ this.biography.text +' From: <a href="'+ biography.url +'" target="_blank">'+ biography.site +'</a></li>';
   
   
   this.$el.html(li);
   
  }
  
 });


return ArtistV;

});