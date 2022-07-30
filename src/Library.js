

function createLibrary (name) {
  class Library {
    constructor (name) {
      this.name = name;
      this.shelves = new Shelves ();
    }
  }
  class Shelves {
    constructor () {
      this.fantasy = [];
      this.fiction = [];
      this.nonFiction = [];
    }
  }
  var library = new Library (name);
  return library;
}

function addBook (library, book) {
  Object.keys(library.shelves).forEach(key => {
    if (key == book.genre) {
      library.shelves[key].push(book);
    }
  })
} 
 
function checkoutBook (library, title, shelf) {
  var checkedOut = "";
  Object.keys(library.shelves).forEach(key => {
    if (key == shelf) {
      for (var i = 0; i < library.shelves[key].length; i++) {
        if (title == library.shelves[key][i].title) {
          library.shelves[key].splice (i, 1);
          checkedOut = "You have now checked out " + title + " from the " + library.name;
          return checkedOut;
        } 
      }
      checkedOut = "Sorry, there are currently no copies of " + title + " available at the " + library.name;
    }
  })
  return checkedOut;
  }




module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};