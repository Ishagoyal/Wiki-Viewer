$(document).ready(function(){
  $('input').keyup(function(evt){
     if(evt.which===13){
       var userInput=$('input').val();
       getResults(userInput);
     }
  });
});

function getResults(userInput){
  var url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + userInput + '&callback=?';
  
 /*$.ajax({
   url:url,
   dataType:'jsonp',
   success: function(responseData){
     var entries='';
     
     for(var i=0;i<responseData.query.search.length;i++){
       entries+=
         createEntry(responseData.query.search[i]);
      
}
 $('.wrapper').html(entries);
     }
   
 });*/
  $.getJSON(url, function(data){
    
    var entries=data.query.search;
    entries.forEach(function (entry){
      
      var urlTitle=entry.title.split(' ');
      urlTitle=urlTitle.join('_');
      ('$.wrapper').append("<div><h3><a target='_blank' href='https://en.wikipedia.org/wiki/" + urlTitle + ">" + entry.title + "</a></h3> <p>" + entry.snippet + "</p> </div>");
    });
    
  });
}
            
     /*       function createEntry(entry) {
  var wikiBase = 'http://wikipedia.org/wiki/';
  var titleLink = '<a href="'
                  + wikiBase
                  + entry.title
                  + '">'
                  + entry.title
                  + '</a>';
  var html = '<div class="entry"><div><span class="title">'
              + titleLink
              + '</span><br><br><span'
              + entry.snippet
              + '</span></div></div>';
  return html;
}*/
