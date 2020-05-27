(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // To Buy
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getToBuy();

    this.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  // Already bought
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    this.items = ShoppingListCheckOffService.getAlreadyBrought();
  }

  // Check Off Service
  function ShoppingListCheckOffService() {
    // Lists
    var toBuy = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Cheesecake",
        quantity: "1"
      }
    ];
    var alreadyBought = [];

    this.getToBuy = function () {
      return toBuy;
    }

    this.getAlreadyBrought = function () {
      return alreadyBought;
    }

    this.buyItem = function (itemIndex) {
      var item = toBuy[itemIndex];
      toBuy.splice(itemIndex, 1);
      alreadyBought.push(item);
    }
  }


})();
