const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controller/user.controller");

router.get("/", usersCtrl.getStart);

router.get("/book", usersCtrl.getBook);

router.post("/book", usersCtrl.createBook);

router.delete("/book", usersCtrl.deleteBook);

router.put("/book", usersCtrl.modifyBook);

module.exports = router;
