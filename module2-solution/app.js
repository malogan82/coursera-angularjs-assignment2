(function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[]).
  controller('ToBuyController', ToBuyController).
  controller('AlreadyBoughtController', AlreadyBoughtController).
  service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    toBuy.removeItem = function(itemIndex){
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var toBuyItems = [{name: 'Cookies', quantity: 10},
                      {name: 'Chips', quantity: 20},
                      {name: 'Eggs', quantity: 30},
                      {name: 'Pepsi Bottles', quantity: 30},
                      {name: 'Water Bottles', quantity: 15}];
    var boughtItems = [];
    var service = this;
    service.getToBuyItems = function(){
      return toBuyItems;
    };
    service.getBoughtItems = function(){
      return boughtItems;
    };
    service.removeItem = function(itemIndex){
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex, 1);
    };
  }
})();
