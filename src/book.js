function createTitle(title) {
   return "The " + title;
}

function buildMainCharacter (name, age, pronouns) { 
  class Character {
    constructor (name, age, pronouns){
      this.name = name;
      this.age = age;
      this.pronouns = pronouns;
    }
  }
  return new Character (name, age, pronouns);
}

function saveReview (review, reviewArray) {
  for (var i = 0; i < reviewArray.length; i++) {
    if (reviewArray[i] == review) {
      return reviewArray;
    }
  }
  reviewArray.push(review);
  return reviewArray;
}

function calculatePageCount (bookTitle) {
  return bookTitle.length * 20;
}

function writeBook (title, char, genre) {
  class Book {
    constructor (title, char, genre) {
      this.title = title;
      this.mainCharacter = char;
      this.pageCount = calculatePageCount (title);
      this.genre = genre;
    }
  }
  return new Book (title, char, genre);
}

function editBook (book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}