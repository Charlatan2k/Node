const book = require("../models/book.js");

let book1 = new book(
  "El rey leon",
  "Drama",
  "Desconocido",
  25,
  "https://images.cdn3.buscalibre.com/fit-in/360x360/5c/bb/5cbb7b71610a87b7be93b2f2cb5f849e.jpg",
  1
);

let book2 = new book(
  "Sirenita",
  "Terror",
  "Cartoon",
  15,
  "https://images.cdn3.buscalibre.com/fit-in/360x360/5c/bb/5cbb7b71610a87b7be93b2f2cb5f849e.jpg",
  2
);

let books = [book1, book2];

function getStart(req, res) {
  res.send("Hello World");
}

function getBooks(req, res) {
  res.json(books);
}

function getBookById(req, res) {
  const id = req.body.id;
  const book = books.find((book) => book.id === id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).send("No book found with the given ID.");
  }
}

function addBook(req, res) {
  try {
    const { title, type, author, price, photo, id_book, id_user } = req.body;
    const newBook = new book(
      title,
      type,
      author,
      price,
      photo,
      id_book,
      id_user
    );
    books.push(newBook);
    // add the new book to your books array or database here
    res.json({ message: "Libro agregado", data: newBook });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: "An error occurred while adding the book" });
  }
}

function deleteBook(req, res) {
  const id = Number(req.body.id);
  const bookIndex = books.findIndex((book) => book.id_book === id);
  if (bookIndex === -1) {
    res.status(404).json({ error: true, message: "Libro no existe" });
  } else {
    const deletedBook = books[bookIndex];
    books.splice(bookIndex, 1);
    res.json({ message: "Libro eliminado", data: deletedBook });
  }
}

function modifyBook(req, res) {
  const id = Number(req.body.id);
  const updatedBook = req.body;

  const book = books.find((book) => book.id_book === id);
  if (book) {
    book.title = updatedBook.title;
    book.type = updatedBook.type;
    book.author = updatedBook.author;
    book.price = updatedBook.price;
    book.photo = updatedBook.photo;

    res.send(book);
  } else {
    res.status(404).send("Book not found");
  }
}

module.exports = {
  getStart,
  getBooks,
  addBook,
  deleteBook,
  modifyBook,
  getBookById,
};
