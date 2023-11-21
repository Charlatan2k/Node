const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller.js");

router.get("/", usersCtrl.getStart);

router.get("/books", usersCtrl.getBooks);

router.get("/books/:id", usersCtrl.getBookById);

router.post("/books", usersCtrl.addBook);

router.put("/books/:id", usersCtrl.modifyBook);

router.delete("/books/:id", usersCtrl.deleteBook);

module.exports = router;
