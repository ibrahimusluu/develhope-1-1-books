/*
https://github.com/doublemacro/checkpoint-exercise

Create an input field "book_title" and a button to Save Book. 
Also Create an h3 tag above the input tag with initial value "Book Title" When user clicks Save book, save the book inside an array, in localStorage, using JSON.
Display the saved book title in a h3 tag above the input. Clear the "book_title" input.
The user can add as many books as they want, and they all are saved in localStorage. But the h3 tag just displays the most recent book, not all the books.

To use:

JSON.stringify
localStorage
addEventListener
*/

let books = [];

function addToList() {
  let bookTitle = document.getElementById("book_title").value;
  let h3 = document.getElementsByTagName("h3");

  // saving the book to an array
  books.push(bookTitle);

  // in localStorage, using JSON
  let booksToString = JSON.stringify(books); // converted to String
  console.log(booksToString); // type is String
  let booksToJSON = {};
  booksToJSON = JSON.parse(booksToString); // converted to Object
  console.log(booksToJSON); // type is Object but seen as Array still, why?
  localStorage.setItem("saved_books", booksToJSON);

  // displaying in h3 tag and clearing input text
  h3[0].innerText = bookTitle;
  document.getElementById("book_title").value = "";
}
