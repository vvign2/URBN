function search(){var a=$("#searchTerm").val().replace(/ /g,"_");commonURL="https://api.instagram.com/v1/tags/"+a+"/media/recent/?client_id=5f9365e9f1054aa991726d731c65aa02",$("#outputImages").html(""),startDownloading(commonURL)}function startDownloading(a){$.get(a,function(a){for(var t=a.data,n="",e=0;e<t.length;e++){var o=t[e].images.low_resolution.url;n+="<a href= '"+o+"'><img src='"+o+"' /></a>"}$("#outputImages").append(n),nextURL=a.pagination.next_url})}function nextPage(){$("#outputImages").html(""),startDownloading(nextURL)}var commonURL="https://api.instagram.com/v1/tags/cat/media/recent/?client_id=5f9365e9f1054aa991726d731c65aa02",nextURL="";$("#searchTerm").keyup(function(){search()});