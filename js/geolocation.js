    $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location)
         {
            $('#country').html(location.country_name);
            $('#state').html(location.state);
            $('#city').html(location.city);
            $('#latitude').html(location.latitude);
            $('#longitude').html(location.longitude);
            $('#ip').html(location.IPv4);               
         });