angular
  .module('UnApp', ['ngRoute'])
  .config(config)
    
config.$inject = ['$routeProvider', '$locationProvider']    
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
  	.when('/', {
      templateUrl: './templates/form-en.html'
  	})
  	.when('/french', {
      templateUrl: './templates/form-fr.html'  	
  	})
  	.when('/spanish', {
      templateUrl: './templates/form-sp.html' 	
  	})
    .when('/users/lang', {
      templateUrl: './templates/lang.html'
    })
    .when('/edit/thanks', {
      templateUrl: './templates/thanks.html'
    })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}