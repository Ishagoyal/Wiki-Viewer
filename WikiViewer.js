$(document).ready(function() {
  $('input').keyup(function(evt) {
    if (evt.which == 13) {
      var userInput = $('input').val();
      console.log(userInput);
      getResults(userInput);
    }
  });
});

function getResults(userInput) {
  var url='https://en.wikipedia.org/w/api.php?'
    + 'action=query&list=search&format=json&srprop=snippet'
    + '&srsearch=' + userInput + '&callback=?';
  
  $.ajax({
    url:url,
    dataType:'jsonp',
    success: function (data){
      var results=data.query.search;
      console.log(results);
      $.each(results,function(key,value){
         $('.wrapper').append("<div><h3><a id='heading' target='_blank' href='https://en.wikipedia.org/wiki/" + value.title +  "'>" + value.title + "</a></h3><p id='content'>" + value.snippet + "</p></div>");
      });
    }
  });
     
}

