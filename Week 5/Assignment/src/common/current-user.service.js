(function() {
"use strict";

angular.module('common')
.service('CurrentUserService', CurrentUserService);

function CurrentUserService() {
  var service = this;
  var _user = [];
  var _registered = false;

  service.signUp = function(user) {
    _user = user;
    _registered = true;
  }

  service.getUser = function() {
    return _user;
  }

  service.registered = function () {
    return _registered;
  }
}
})();
