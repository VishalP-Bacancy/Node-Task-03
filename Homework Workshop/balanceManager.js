var balance = 0;



module.exports = {
    decreaseBalance: function(amount){
        let errorMessage = '';
        if(!this.canAfford(amount)){
            errorMessage = 'Insufficient balance';
        }
        if(errorMessage){
            throw new Error(errorMessage);
        }
        balance -= amount;
    },
    
    getBalance: function(){ 
        return balance;
    },
    
    increaseBalance: function(amount){
        balance += amount;
    },
    

    canAfford(amount) {
        return amount <= balance
    },

    isValidAmount: function(amount){
        if(!amount){
          return false;
        } else {
          return true;
        }
      },

};