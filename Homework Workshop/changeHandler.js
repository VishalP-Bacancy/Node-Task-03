
//     getAmount: function(coinType) {
//         // COINS:
//         // [p]enny
//         // [n]ickel
//         // [d]ime
//         // [q]uarter

module.exports = {
  getAmount: function (coinType) {
    const coinValues = {
      'p': 1,
      'n': 5,
      'd': 10,
      'q': 25,
    };

    if (coinValues.hasOwnProperty(coinType)) {
      return coinValues[coinType];
    } else {
      throw new Error('Unrecognized coin ' + coinType);
    }
  },
};
