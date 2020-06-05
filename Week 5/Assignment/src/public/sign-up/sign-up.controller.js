(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'CurrentUserService']
function SignUpController(MenuService, CurrentUserService) {
  var $ctrl = this;

  $ctrl.userMessage = "";

  $ctrl.submit = function() {
    $ctrl.completed = true;
    MenuService.getMenuItem($ctrl.user.menuNumber)
    .then(function(response) {
      $ctrl.user.menuItem = response;
      CurrentUserService.signUp($ctrl.user);
      $ctrl.userMessage = "Your information has been saved";
    })
    .catch(function(error) {
      $ctrl.userMessage = "No such menu number exists";
    });
  }
}
})();
