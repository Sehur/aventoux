var App = angular.module('App', ['ngRoute','ngAnimate','ui.bootstrap'] );
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
            .when('/contacto', {
                templateUrl : 'pages/contacto.html',
                controller  : 'contactoCtrl'
            })
            .when('/construyeEvento', {
                templateUrl : 'pages/construyeEvento.html',
                controller  : 'conEvCtrl'
            })
            .when('/eventos', {
                templateUrl : 'pages/eventos.html',
                controller  : 'eventosCtrl'
            })



     });

   App.controller('mainCtrl', function($scope,$http) {
     $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
            var slides = $scope.slides = [];
            $scope.addSlide = function() {
              var newWidth = 600 + slides.length + 1;
              slides.push({
                image: '//placekitten.com/' + newWidth + '/300',
                text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                  ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
              });
            };
            for (var i=0; i<4; i++) {
              $scope.addSlide();
            }
    });
    App.controller('signupCtrl', function($scope,$http) {
         // create a message to display in our view
         $scope.message = 'HOLA';
     });
     App.controller('tbCtrl', function($scope,$http) {
          // create a message to display in our view
          $scope.message = 'HOLA';
      });
      App.controller('contactoCtrl', function($scope,$http) {
           // create a message to display in our view
           $scope.message = 'HOLA';
       });
       App.controller('conEvCtrl', function($scope,$http) {
            // create a message to display in our view
            $scope.message = 'HOLA';
        });

        App.controller('eventosCtrl', function($scope,$http) {
          $scope.events=[
           {
              title: 'Titulo 1',
              image: 'http://placehold.it/600x425',
              description: 'Descripcion 1'
           },
           {
              title: 'Titulo 2',
              image: 'http://placehold.it/600x425',
              description: 'Descripcion 2'
           },
           {
              title: 'Titulo 3',
              image: 'http://placehold.it/600x425',
              description: 'Descripcion 3'
           },
           {
              title: 'Titulo 4',
              image: 'http://placehold.it/600x425',
              description: 'Descripcion 4'
           }
           ]
         });
