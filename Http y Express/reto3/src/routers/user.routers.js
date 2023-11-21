const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller.js");

router.get("/", usersCtrl.getStart);

router.get("/books", usersCtrl.getBooks);

router.get("/books/:id", usersCtrl.getBookById);

router.post("/books", usersCtrl.addBook);

router.put("/books", usersCtrl.modifyBook);

router.delete("/books", usersCtrl.deleteBook);

module.exports = router;
