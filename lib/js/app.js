(function($) {
  "use strict";

})(jQuery);
;//src game.js
function Game() {
  this.test = "Test";
}
module.exports = Game;
;//src romannumerals
function romanNumerals(num){
  if (num === 1){
    return "I";
  } else if (num === 2){
    return "II";
  } else if (num === 4){
    return "IV";
  }
}

module.exports = romanNumerals;
