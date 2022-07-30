function shelfBook (book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift (book);
  } 
  return shelf;
}

function unshelfBook (book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == book) {
      shelf.splice(i, 1);
    }
  }
  return shelf;
}

function listTitles (shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    if (i > 0) {
      titles += ", ";
    }
    titles += shelf[i].title;
  }
  return titles;
}

function searchShelf (shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == title) {
      return true;
    } 
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};