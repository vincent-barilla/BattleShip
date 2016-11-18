const Ship = require('./Ship.js');

const Ships = function(playerName) {
  this.carrier = new Ship('carrier', 5, playerName);
  this.battleship = new Ship('battleship', 4, playerName);  
  this.cruiser = new Ship('cruiser', 3, playerName);
  this.submarine = new Ship('submarine', 3, playerName);  
  this.destroyer = new Ship('destroyer', 2, playerName);
  this.numOfShips = 5;
  this.numOfSunkenShips = 0;
};

Ships.prototype.printShipList = function() {
  var printString = '';
  for (var key in this) {
    if (this[key].constructor === Ship) {
      // This fixes a formatting error, where the first entry would be offset by one space.
      if (printString.length) {
        printString += ' ';
      }
      printString += key.toUpperCase() + ' (length: ' + this[key].length + ') '+ '\n';
    }
  }
  return printString;
};

module.exports = Ships;