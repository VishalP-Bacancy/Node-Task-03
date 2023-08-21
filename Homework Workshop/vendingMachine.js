
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

var balance = 0;
var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];



module.exports = {
  canAfford: function(amount){
    if(!balanceManager.isValidAmount(amount)){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },
   
    releaseChange: function(){
        var currentBalance = balanceManager.getBalance();
        balanceManager.decreaseBalance(currentBalance);
        return this.convertToChange(currentBalance);
    },  
 

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },
  

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  },

  getProducts: function() { 
    return productInventory.getProducts();
  },

  convertToChange: (amount) => {
    const coinValues = {
      'q': 25,
      'd': 10,
      'n': 5,
      'p': 1,
    };
    const coins = ['q', 'd', 'n', 'p']
    const result = []

    for (const coin of coins) {
      while (amount >= coinValues[coin]) {
          amount -= coinValues[coin];
          result.push(coin);
      }
  }

  return result;
  }


};
