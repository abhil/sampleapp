angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $ionicModal.fromTemplateUrl('templates/search.html',{
      scope:$scope
    }).then(function(modal){
      $scope.modal=modal;
    });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
   alert("Log in not allowed" + $scope.loginData.username);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Orange', id: 1 },
    { title: 'Apple', id: 2 },
    { title: 'Cran Berry', id: 3 },
    { title: 'Mangooste', id: 4 },
    { title: 'Goose Berry', id: 5 },
    { title: 'Mango', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ValidateCtrl',function($scope){

});