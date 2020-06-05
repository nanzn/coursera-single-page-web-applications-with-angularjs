(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['CurrentUserService', 'ApiPath'];
function MyInfoController(CurrentUserService, ApiPath) {
  var $ctrl = this;

  $ctrl.registered = CurrentUserService.registered();
  $ctrl.user = CurrentUserService.getUser();
  $ctrl.basePath = ApiPath;
}
})();
