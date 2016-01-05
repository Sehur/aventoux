var App = angular.module('App', ['ngRoute'] );
 App.config(function( $routeProvider, $httpProvider,$locationProvider) {
       $routeProvider

            // route for the home page

            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainCtrl'
            })
            .when('/signup', {
                templateUrl : 'pages/signup.html',
                controller  : 'signupCtrl'
            })
            .when('/teambuilding', {
                templateUrl : 'pages/teambuilding.html',
                controller  : 'tbCtrl'
            })
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactCtrl'
            })



     });

   App.controller('mainCtrl', function($scope,$http) {
        // create a message to display in our view
        $scope.message = 'HOLA';
    });
    App.controller('signupCtrl', function($scope,$http) {
         // create a message to display in our view
         $scope.message = 'HOLA';
     });
     App.controller('tbCtrl', function($scope,$http) {
          // create a message to display in our view
          $scope.message = 'HOLA';
      });
      App.controller('contactCtrl', function($scope,$http) {
           // create a message to display in our view
           $scope.message = 'HOLA';
       });
