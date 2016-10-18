var galleryApp = angular.module("bookGallery", []);

galleryApp.controller('galleryCtrl', ['$scope', function($scope) {
    $scope.test = "Welcome to the Gallery";
  }]);

galleryApp.directive('currentPage', function() {
    console.log("Current Page is present.");
    return {
        restrict: 'E';
    }
});
