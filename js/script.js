var App = angular.module('App', ['ngRoute'] );
 App.config(function( $routeProvider, $httpProvider,$locationProvider) {
       $routeProvider

            // route for the home page

            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainCtrl'
            })

           
     });


   App.controller('mainCtrl', function($scope,$http) {
        // create a message to display in our view
        $scope.message = 'HOLA';
    });

