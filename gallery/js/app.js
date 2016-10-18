var galleryApp = angular.module("bookGallery", []);

galleryApp.controller('galleryCtrl', ['$scope', function($scope) {
    $scope.test = "Welcome to the Gallery";
    
    $scope.count = 0;
    
    $scope.next = function() {
        $scope.count += 1;
    }
    
    $scope.prev = function() {
        $scope.count -= 1;
    }
  }]);

galleryApp.directive('currentImage', function() {
    console.log("Current Image is present.");
    return {
        restrict: 'E',
        templateUrl: "currentImage.html"
    }
});
