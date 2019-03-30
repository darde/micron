// module.exports.tiny = function tiny(string) {
//   if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
//   return string.replace(/\s/g, "");
// };
var getMicronSearch = require('./components/search/index.js');


var micron = (function() {
  var inputSearchCollection = [];

  inputSearchCollection = [... document.querySelectorAll('[data-micron="search"]')];

  inputSearchCollection.forEach(function(input) {
    input.appendChild(getMicronSearch());
  });
})();

// module.export micron = micron;
