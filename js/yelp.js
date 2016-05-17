function yelpSearch ()
{
    
  var category = $("#category").val();
  var zipcode = $("#zipcode").val();
    
    var category = $("#category").val().replace(/ /g,"_");;
    var zipcode= $("#zipcode").val().replace(/ /g,"_");;
    console.log(category);
    console.log(zipcode);
    
    
    
    var OriginalURL="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20local.search%20where%20zip%3D%27"+zipcode+"%27%20and%20query%3D%27"+category+"%27&format=json&callback=";
    
    $.get( OriginalURL, function( data ) {
   console.log(data.query.results.Result);
        
      var places = (data.query.results.Result);
        jQuery('#content').html('');
        $.each(places, function(i, item) {
            $('#content').append(
    $('<li>').append(
        $('<h2>').text(item.Title).append ($('<p>').text(item.Address +" "+ item.City +" "+ item.State )).append($('<p>').text(item.Phone)).append($('<hr>'))
        
        
)); });
        
});

      
}


