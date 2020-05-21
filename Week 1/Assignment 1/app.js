(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.items = "";
    $scope.message = "";
    $scope.color = {};

    $scope.check = function() {
       var itemsCount = countItems($scope.items);

       if (itemsCount <= 0 || $scope.items == "") {
         $scope.message = "Please enter data first."
         $scope.color.style = {"color":"red", "border":"3px","border-style":"solid", "border-color":"red"};
       } else if (itemsCount <= 3){
         $scope.message = "Enjoy!"
         $scope.color.style = {"color":"green", "border":"3px","border-style":"solid", "border-color":"green"};
       } else {
         $scope.message = "Too much!"
         $scope.color.style = {"color":"green", "border":"3px","border-style":"solid", "border-color":"green"};
       }
    };

    function countItems(items){
      var itemsArray = items.split(',');
      var itemsCount = 0;
      for(var i=0; i<itemsArray.length; i++){
        if(itemsArray[i].trim()!=""){
          itemsCount++;
        }
      }
      return itemsCount;
    }
  }
})();
