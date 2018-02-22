var galleryApp = angular.module("bookGallery", []);

galleryApp.controller('galleryCtrl', ['$scope', function($scope) {
    $scope.test = "Gallery should contain logic and updated templatepath";
    
    $scope.count = 0;
    $scope.folder = window.location.pathname.replace('/gallery/','');

    $scope.next = function() {
        $scope.count += 1;
    }
    
    $scope.prev = function() {
        if($scope.count-1 >= 0) {
            $scope.count -= 1;
        }
    }
    
    $scope.goToPage = function(page) {
        if (page != null) {
            $scope.count = page;
        }
    }
  }]);

galleryApp.directive('checkImage', function($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attrs.$observe('ngSrc', function(ngSrc) {
                $http.get(ngSrc).error(function(){
                    element.attr('src', '/images/galleryEnd.png'); // set default image
                });
            });
        }
    };
});

galleryApp.directive('currentImage', function() {
    console.log("Current Image is present.");
    return {
        restrict: 'E',
        templateUrl: "/gallery/js/currentImage.html"
    }
});

galleryApp.directive('navigationBlock',function() {
    console.log("Navigation element is on page.");
    return {
        restrict: 'E',
        templateUrl: "/gallery/js/navigationBlock.html"
    }
});
