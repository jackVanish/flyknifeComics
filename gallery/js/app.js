var galleryApp = angular.module("bookGallery", []);

galleryApp.controller('galleryCtrl', ['$scope', function($scope) {
    $scope.test = "Welcome to the Gallery";
  }]);

galleryApp.directive('currentImage', function() {
    console.log("Current Image is present.");
    return {
        restrict: 'E';
    }
});
