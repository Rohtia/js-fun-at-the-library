var Library = require('./library.js');

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.greetPatron = function greetPatron (name, time) {
      var greet;
      if (time) {
        greet = `Good morning, ${name}!`;
      } else {
        greet = `Hello, ${name}!`;
      }
      return greet;
    }
    this.findBook = function findBook (book) {
      console.log(`print library${Library.name}`);
      console.log(`Library?`);
    }
  } //close constructor
}

module.exports = Librarian;