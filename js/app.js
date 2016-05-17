var urbnApp = angular.module('urbnApp',['ngRoute']);

   urbnApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/home', {
                templateUrl : 'partials/homepage.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/stocks', {
                templateUrl : 'partials/stock.html',
                controller  : 'stockController'
            })
           .when('/instagram', {
                templateUrl : 'partials/instagram.html',
                controller  : 'instagramController'
            })

            // route for the contact page
            .when('/yelp', {
                templateUrl : 'partials/yelp.html',
                controller  : 'yelpController'
            })
             .when('/weather', {
                templateUrl : 'partials/weather.html',
                controller  : 'weatherController'
            })
        
           .otherwise({
            redirectTo: '/home'
        });
        
    });


urbnApp.controller('mainController', function($scope) {
   
        $scope.message = 'Home Page Designed for Urban Outfitters Coding Challenge!';
    });   

urbnApp.controller('instagramController', function($scope) {
        
});    

urbnApp.controller('yelpController', function($scope) {
       
                    });

urbnApp.controller('stockController', function($scope,$http) {
    
      $scope.stock1    = "";
    $scope.getArray  = [];
    $scope.mySubmit  = function(){
 
     
        $http.get("http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in('"+ $scope.stock1+"')&env=http://datatables.org/alltables.env&format=json")
            .success(function(response){
            $scope.data = response;
                 
      function scope(){
    
      $scope.getArray.push(['Previous Close',response.query.results.quote.PreviousClose]);
      $scope.getArray.push(['Open',response.query.results.quote.Open]);
      $scope.getArray.push(['Bid',response.query.results.quote.Bid]);
      $scope.getArray.push(['Ask',response.query.results.quote.Ask]);
      $scope.getArray.push(['1 Year Target Estimate',response.query.results.quote.OneyrTargetPrice]);
      $scope.getArray.push(['Beta',response.query.results.quote.EBITDA]);
      $scope.getArray.push(['Earnings Date',response.query.results.quote.ExDividendDate]);
      $scope.getArray.push(['Days Range',response.query.results.quote.DaysRange]);
      $scope.getArray.push(['52 Week Range',response.query.results.quote.YearRange]);
      $scope.getArray.push(['Volume',response.query.results.quote.Volume]);
      $scope.getArray.push(['Average Volume',response.query.results.quote.AverageDailyVolume]);
      $scope.getArray.push(['Market Cap',response.query.results.quote.MarketCapitalization]);
      $scope.getArray.push(['P/E',response.query.results.quote.PERatio]);
      $scope.getArray.push(['EPS',response.query.results.quote.PriceEPSEstimateNextYear]);
      $scope.getArray.push(['Dividend & Yield',response.query.results.quote.DividendYield]); 
    
}
            
            scope();
            
   
                    });
};
    });



