var galleryApp = angular.module("bookGallery", []);

galleryApp.controller('galleryCtrl', ['$scope', function($scope) {
    $scope.test = "Welcome to the Gallery";
  }]);
