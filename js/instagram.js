var Instragram

var commonURL = "https://api.instagram.com/v1/tags/cat/media/recent/?client_id=5f9365e9f1054aa991726d731c65aa02";
 
var nextURL = "";
 
function search(){
  var searchTerm = $("#searchTerm").val().replace(/ /g,"_");;
  commonURL = "https://api.instagram.com/v1/tags/"+searchTerm+"/media/recent/?client_id=5f9365e9f1054aa991726d731c65aa02";
  $("#outputImages").html("");
  startDownloading(commonURL);
}
 
$("#searchTerm").keyup(function(){
    search();
});
 
 function startDownloading(commonURL){
 
    $.get( commonURL, function( data ) {
      var arrayOfimages = data.data;
 
      var html = "";
      for (var i = 0; i < arrayOfimages.length; i++) {
        var link = arrayOfimages[i].images.low_resolution.url;
        html +="<a href= '"+link+"'><img src='" + link + "' /></a>";
      };
 
      $("#outputImages").append(html);
 
      nextURL = data["pagination"]["next_url"];
        });
}
 
function nextPage()
{
    $("#outputImages").html("");
    startDownloading(nextURL);
}
 
