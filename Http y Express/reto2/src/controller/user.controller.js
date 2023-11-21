const Book = require("../models/book.js");

let book1 = new Book("El rey leon", "Drama", "Desconocido", 100, "url");

function getStart(req, res) {
  let respuesta = { error: true, codigo: 200, mensaje: "Punto de inicio" };
  res.send(respuesta);
}

function getBook(req, res) {
  res.send({ message: "Libro encontrado", book1 });
}

function createBook(req, res) {
  let book = new Book(
    req.body.title,
    req.body.type,
    req.body.author,
    req.body.price,
    req.body.photo
  );
  res.send({ message: "Libro creado", book });
}

function deleteBook(req, res) {
  let book1 = null;
  res.send({ message: "El libro ha sido eliminado" });
}

function modifyBook(req, res) {
  (book1.title = req.body.title),
    (book1.type = req.body.type),
    (book1.author = req.body.author),
    (book1.price = req.body.price),
    res.send({ message: "El libro ha sido modificado", book1 });
}

function setUser(req, res) {
  usuario = { nombre: req.params.nombre };
  let respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Usuario creado",
    resultado: usuario,
  };
  res.send(respuesta);
}

module.exports = {
  getStart,
  getBook,
  setUser,
  createBook,
  deleteBook,
  modifyBook,
};
