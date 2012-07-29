require(['utils/zepto','models/artist.model','views/artist.view'],function( $, mArtist ){
 	
  var bio = new mArtist.Bio();
  
      bio.on("error", function(model, error){ //checks for id at set
  	    console.log("An error was found");
  	    console.log(error);
  	  });

  
  	  
  	  bio.set({name: "radiohead"});
      
  	  	  
 	  bio.fetch({error: function(model,error){ //checks for error on xhr	
  	  	//console.log(error);
  	   },
  	   success: function(model,rObj){
  	    //console.log(rObj.response.biographies);	
  	   }
  	  
  	  });
	  
});